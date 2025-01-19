/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.proto || ($protobuf.roots.proto = {});

$root.Protocol = (function() {

    /**
     * Namespace Protocol.
     * @exports Protocol
     * @namespace
     */
    var Protocol = {};

    Protocol.MessageKey = (function() {

        /**
         * Properties of a MessageKey.
         * @memberof Protocol
         * @interface IMessageKey
         * @property {string|null} [remoteJid] MessageKey remoteJid
         * @property {boolean|null} [fromMe] MessageKey fromMe
         * @property {string|null} [id] MessageKey id
         * @property {string|null} [participant] MessageKey participant
         */

        /**
         * Constructs a new MessageKey.
         * @memberof Protocol
         * @classdesc Represents a MessageKey.
         * @implements IMessageKey
         * @constructor
         * @param {Protocol.IMessageKey=} [properties] Properties to set
         */
        function MessageKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageKey remoteJid.
         * @member {string} remoteJid
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.remoteJid = "";

        /**
         * MessageKey fromMe.
         * @member {boolean} fromMe
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.fromMe = false;

        /**
         * MessageKey id.
         * @member {string} id
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.id = "";

        /**
         * MessageKey participant.
         * @member {string} participant
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.participant = "";

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @function create
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.IMessageKey=} [properties] Properties to set
         * @returns {Protocol.MessageKey} MessageKey instance
         */
        MessageKey.create = function create(properties) {
            return new MessageKey(properties);
        };

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @function encode
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.IMessageKey} message MessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.remoteJid != null && Object.hasOwnProperty.call(message, "remoteJid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.remoteJid);
            if (message.fromMe != null && Object.hasOwnProperty.call(message, "fromMe"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fromMe);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.participant != null && Object.hasOwnProperty.call(message, "participant"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.participant);
            return writer;
        };

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.IMessageKey} message MessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.MessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.MessageKey} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.MessageKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.remoteJid = reader.string();
                        break;
                    }
                case 2: {
                        message.fromMe = reader.bool();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                case 4: {
                        message.participant = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.MessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.MessageKey} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageKey message.
         * @function verify
         * @memberof Protocol.MessageKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.remoteJid != null && message.hasOwnProperty("remoteJid"))
                if (!$util.isString(message.remoteJid))
                    return "remoteJid: string expected";
            if (message.fromMe != null && message.hasOwnProperty("fromMe"))
                if (typeof message.fromMe !== "boolean")
                    return "fromMe: boolean expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.participant != null && message.hasOwnProperty("participant"))
                if (!$util.isString(message.participant))
                    return "participant: string expected";
            return null;
        };

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.MessageKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.MessageKey} MessageKey
         */
        MessageKey.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.MessageKey)
                return object;
            var message = new $root.Protocol.MessageKey();
            if (object.remoteJid != null)
                message.remoteJid = String(object.remoteJid);
            if (object.fromMe != null)
                message.fromMe = Boolean(object.fromMe);
            if (object.id != null)
                message.id = String(object.id);
            if (object.participant != null)
                message.participant = String(object.participant);
            return message;
        };

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.MessageKey} message MessageKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.remoteJid = "";
                object.fromMe = false;
                object.id = "";
                object.participant = "";
            }
            if (message.remoteJid != null && message.hasOwnProperty("remoteJid"))
                object.remoteJid = message.remoteJid;
            if (message.fromMe != null && message.hasOwnProperty("fromMe"))
                object.fromMe = message.fromMe;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.participant != null && message.hasOwnProperty("participant"))
                object.participant = message.participant;
            return object;
        };

        /**
         * Converts this MessageKey to JSON.
         * @function toJSON
         * @memberof Protocol.MessageKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageKey
         * @function getTypeUrl
         * @memberof Protocol.MessageKey
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Protocol.MessageKey";
        };

        return MessageKey;
    })();

    return Protocol;
})();

module.exports = $root;
