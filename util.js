mergePayload (source, target) {

        /**
         * Check for object validity
         * @param {Object} obj - JS object
         * @returns {Boolean} true || false
         */
        const isObject = obj => obj && typeof obj === 'object';

        if (!isObject(target) || !isObject(source)) {
            return source;
        }

        Object.keys(source).forEach(key => {
            const targetValue = target[key];
            const sourceValue = source[key];

            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                target[key] = targetValue.concat(sourceValue);
            } else if (isObject(targetValue) && isObject(sourceValue)) {
                target[key] = this.mergePayload(Object.assign({
                }, sourceValue), targetValue);
            } else {
                target[key] = sourceValue;
            }
        });

        return target;
    }
