/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Aea = (function() {

    /**
     * Namespace Aea.
     * @exports Aea
     * @namespace
     */
    var Aea = {};

    Aea.NonE2EEAttestation = (function() {

        /**
         * Properties of a NonE2EEAttestation.
         * @memberof Aea
         * @interface INonE2EEAttestation
         * @property {Aea.NonE2EEAttestation.AccountType|null} [accountType] NonE2EEAttestation accountType
         */

        /**
         * Constructs a new NonE2EEAttestation.
         * @memberof Aea
         * @classdesc Represents a NonE2EEAttestation.
         * @implements INonE2EEAttestation
         * @constructor
         * @param {Aea.INonE2EEAttestation=} [properties] Properties to set
         */
        function NonE2EEAttestation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NonE2EEAttestation accountType.
         * @member {Aea.NonE2EEAttestation.AccountType} accountType
         * @memberof Aea.NonE2EEAttestation
         * @instance
         */
        NonE2EEAttestation.prototype.accountType = 0;

        /**
         * Creates a new NonE2EEAttestation instance using the specified properties.
         * @function create
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.INonE2EEAttestation=} [properties] Properties to set
         * @returns {Aea.NonE2EEAttestation} NonE2EEAttestation instance
         */
        NonE2EEAttestation.create = function create(properties) {
            return new NonE2EEAttestation(properties);
        };

        /**
         * Encodes the specified NonE2EEAttestation message. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @function encode
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.INonE2EEAttestation} message NonE2EEAttestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NonE2EEAttestation.encode = function encode(message, writer, q) {
            if (!writer)
                writer = $Writer.create();
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountType);
            return writer;
        };

        /**
         * Encodes the specified NonE2EEAttestation message, length delimited. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.INonE2EEAttestation} message NonE2EEAttestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NonE2EEAttestation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer.
         * @function decode
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Aea.NonE2EEAttestation} NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NonE2EEAttestation.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var end, message;
            if (length === undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = new $root.Aea.NonE2EEAttestation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.accountType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            if (length !== undefined) {
                if (reader.pos !== end)
                    throw RangeError("index out of range");
                reader.len = length;
            }
            return message;
        };

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Aea.NonE2EEAttestation} NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NonE2EEAttestation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NonE2EEAttestation message.
         * @function verify
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NonE2EEAttestation.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                switch (message.accountType) {
                default:
                    return "accountType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a NonE2EEAttestation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Aea.NonE2EEAttestation} NonE2EEAttestation
         */
        NonE2EEAttestation.fromObject = function fromObject(object, long) {
            if (object instanceof $root.Aea.NonE2EEAttestation)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".Aea.NonE2EEAttestation: object expected");
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            var message = new $root.Aea.NonE2EEAttestation();
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                message.accountType = 0;
                break;
            case "HYBRID_E2EE":
            case 1:
                message.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                message.accountType = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a NonE2EEAttestation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.NonE2EEAttestation} message NonE2EEAttestation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NonE2EEAttestation.toObject = function toObject(message, options, q) {
            if (!options)
                options = {};
            if (q === undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (options.defaults)
                object.accountType = options.enums === String ? "E2EE" : 0;
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                object.accountType = options.enums === String ? $root.Aea.NonE2EEAttestation.AccountType[message.accountType] === undefined ? message.accountType : $root.Aea.NonE2EEAttestation.AccountType[message.accountType] : message.accountType;
            return object;
        };

        /**
         * Converts this NonE2EEAttestation to JSON.
         * @function toJSON
         * @memberof Aea.NonE2EEAttestation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NonE2EEAttestation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NonE2EEAttestation
         * @function getTypeUrl
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NonE2EEAttestation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Aea.NonE2EEAttestation";
        };

        /**
         * AccountType enum.
         * @name Aea.NonE2EEAttestation.AccountType
         * @enum {number}
         * @property {number} E2EE=0 E2EE value
         * @property {number} HYBRID_E2EE=1 HYBRID_E2EE value
         * @property {number} NON_E2EE=2 NON_E2EE value
         */
        NonE2EEAttestation.AccountType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "E2EE"] = 0;
            values[valuesById[1] = "HYBRID_E2EE"] = 1;
            values[valuesById[2] = "NON_E2EE"] = 2;
            return values;
        })();

        return NonE2EEAttestation;
    })();

    return Aea;
})();

module.exports = $root;
