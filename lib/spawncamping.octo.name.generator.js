
(function (window) {

    var wordSets = [];

    // --- Default wordSet ---
    wordSets['default'] = {};
    wordSets['default']['verbs'] = [
        "implement", "utilize", "integrate", "streamline", "optimize", "evolve", "transform", "embrace",
        "enable", "orchestrate", "leverage", "reinvent", "aggregate", "architect", "enhance", "incentivize", "morph", "empower",
        "envisioneer", "monetize", "harness", "facilitate", "seize", "disintermediate", "synergize", "strategize", "deploy",
        "brand", "grow", "target", "syndicate", "synthesize", "deliver", "mesh", "incubate", "engage", "maximize", "benchmark",
        "expedite", "reintermediate", "whiteboard", "visualize", "repurpose", "innovate", "scale", "unleash", "drive", "extend",
        "engineer", "revolutionize", "generate", "exploit", "transition", "e-enable", "iterate", "cultivate", "matrix",
        "productize", "redefine",
        "recontextualize"
    ];

    wordSets['default']['adjectives'] = [
        "clicks-and-mortar", "value-added", "vertical", "proactive", "robust", "revolutionary", "scalable",
        "leading-edge", "innovative", "intuitive", "strategic", "e-business", "mission-critical", "sticky", "one-to-one",
        "24/7", "end-to-end", "global", "B2B", "B2C", "granular", "frictionless", "virtual", "viral", "dynamic", "24/365",
        "best-of-breed", "killer", "magnetic", "bleeding-edge", "web-enabled", "interactive", "dot-com", "sexy", "back-end",
        "real-time", "efficient", "front-end", "distributed", "seamless", "extensible", "turn-key", "world-class",
        "open-source", "cross-platform", "cross-media", "synergistic", "bricks-and-clicks", "out-of-the-box", "enterprise",
        "integrated", "impactful", "wireless", "transparent", "next-generation", "cutting-edge", "user-centric", "visionary",
        "customized", "ubiquitous", "plug-and-play", "collaborative", "compelling", "holistic", "rich"
    ];

    wordSets['default']['nouns'] = [
        "synergies", "web-readiness", "paradigms", "markets", "partnerships", "infrastructures", "platforms",
        "initiatives", "channels", "eyeballs", "communities", "ROI", "solutions", "e-tailers", "e-services", "action-items",
        "portals", "niches", "technologies", "content", "vortals", "supply-chains", "convergence", "relationships",
        "architectures", "interfaces", "e-markets", "e-commerce", "systems", "bandwidth", "infomediaries", "models",
        "mindshare", "deliverables", "users", "schemas", "networks", "applications", "metrics", "e-business", "functionalities",
        "experiences", "web services", "methodologies"
    ];

    // --- Industrial wordSet ---
    wordSets['industrial'] = {};
    wordSets['industrial']['verbs'] = [
        "implement", "integrate", "squelch", "weld", "power-coat", "print", "cut", "press", "dry", "cure", "drill", "sand", "polish",
        "scratch", "injure", "tare", "weigh", "ship", "machine", "shave", "build", "demolish", "wheel", "move", "plug", "unplug", "smelt",
        "vacuum", "fix", "break", "carve", "collect", "make", "construct"
    ];

    wordSets['industrial']['adjectives'] = [
        "rusty", "sharp", "dull", "flaming", "smoldering", "rough", "smooth", "light", "heavy", "wet", "dry", "dusty", "clean", "metal",
        "plastic", "grooved", "pitted", "empty", "full", "wooden", "polished", "dull", "shiny", "reflective", "transparent", "smoking",
        "hot", "pressed", "rubberized", "plasticised", "level", "circular", "square", "dark", "crosscut", "cone-shaped", "keyless",
        "super", "super-duty", "fine", "fine-cut", "deluxe", "micro", "macro", "nailed", "3-speed", "buffed", "flush", "turbo",
        "high-speed", "diamond", "powered", "threaded", "random"
    ];

    wordSets['industrial']['nouns'] = [
        "lacquer", "slag", "drill", "table-saw", "jig-saw", "saw", "rubber", "plastic", "wood", "metal", "table", "chair", "window",
        "house", "building", "vehicle", "circle", "square", "level", "mahogany", "birch", "pine", "cedar", "cypress", "douglas-fir",
        "larch", "red-pine", "spruce", "aspen", "balsa", "boxwood", "cherry", "corkwood", "elm", "eucalyptus", "hickory", "maple", "oak",
        "router", "hand-tool", "power-tool", "bandsaw", "lathe", "cabinet-saw", "grinder", "air-compressor", "fence", "chuck",
        "drill-chuck", "jig", "nail", "screw", "sander", "disc-sander", "resin", "coating", "thread", "disc", "handpiece", "dust",
        "sawdust", "shavings"
    ];


    function constructor() {
//        function Dome (els) {
//
//        }

        function pick(wordset) {

        }

        var defaultOptions = {
            wordSet: 'default'
        };

        // messy way to calculate default options without jquery.extend
        function calculateOptions(options) {
            if (!options) {
                return defaultOptions;
            }
            else {
                function populate_options(object, default_object) {
                    for (var op in default_object) {
                        if (typeof object[op] === "undefined") {
                            object[op] = default_object[op];
                        }
                        else if (typeof default_object[op] === "object") {
                            return populate_options(object[op], default_object[op]);
                        }
                    }
                    return object;
                }
                return populate_options(options, defaultOptions);
            }
        }

        var publicInterface = {
            getArray: function(options) {
                var _options = calculateOptions(options);

                var set = wordSets[_options.wordSet];


                var choices = [];

                ['verbs','adjectives','nouns'].forEach(function(key){
                    var len = set[key].length;
                    var index = Math.round(Math.random() * len);
                    choices.push(set[key][index]);
                });

                return choices;
            },
            concatenate: function(choices) {
                var result = "";
                var len = choices.length;

                for( var i in choices )
                {
                    result = result + choices[i];

                    if( parseInt(i) !== (len-1) ) {
                        result = result + '-';
                    }
                }

                return result;
            },
            get: function (options) {

                var choices = this.getArray(options);

                debugger;

                var result = this.concatenate(choices);

                return result;
            }
        };

        return publicInterface;
    }


    window.OctoNameGenerator = constructor();

}(window));