const mixin = {
    mounted() {
        (this.onFeaturesUpdate || function() {})();
    },
    watch: { 
        "$features.lastUpdate"() { 
            (this.onFeaturesUpdate || function() {})();
        }
    },
}

export default mixin;