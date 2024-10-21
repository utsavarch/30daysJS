var TimeLimitedCache = function() {
    this.cache = new Map(); // To store key-value pairs and their expiration time
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    const expireTime = currentTime + duration;

    // Check if the key already exists and is still valid
    const alreadyExists = this.cache.has(key) && this.cache.get(key).expireTime > currentTime;

    // Update the cache with the new value and expiration time
    this.cache.set(key, { value, expireTime });

    return alreadyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const currentTime = Date.now();

    if (this.cache.has(key)) {
        const { value, expireTime } = this.cache.get(key);

        // Check if the key is still valid (not expired)
        if (expireTime > currentTime) {
            return value;
        } else {
            // If expired, remove the key from the cache
            this.cache.delete(key);
        }
    }

    return -1; // Return -1 if the key does not exist or is expired
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let activeKeys = 0;

    // Iterate over the cache and count only unexpired keys
    for (const [key, { expireTime }] of this.cache) {
        if (expireTime > currentTime) {
            activeKeys++;
        } else {
            // Optionally remove expired keys to keep the cache clean
            this.cache.delete(key);
        }
    }

    return activeKeys;
};
