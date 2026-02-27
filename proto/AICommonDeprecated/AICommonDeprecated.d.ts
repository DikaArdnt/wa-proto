import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace AICommonDeprecated. */
export namespace AICommonDeprecated {

    /** Properties of a AIRichResponseSubMessage. */
    interface IAIRichResponseSubMessage {

        /** AIRichResponseSubMessage messageType */
        messageType?: (AICommonDeprecated.AIRichResponseSubMessageType|null);

        /** AIRichResponseSubMessage gridImageMetadata */
        gridImageMetadata?: (AICommonDeprecated.IAIRichResponseGridImageMetadata|null);

        /** AIRichResponseSubMessage messageText */
        messageText?: (string|null);

        /** AIRichResponseSubMessage imageMetadata */
        imageMetadata?: (AICommonDeprecated.IAIRichResponseInlineImageMetadata|null);

        /** AIRichResponseSubMessage codeMetadata */
        codeMetadata?: (AICommonDeprecated.IAIRichResponseCodeMetadata|null);

        /** AIRichResponseSubMessage tableMetadata */
        tableMetadata?: (AICommonDeprecated.IAIRichResponseTableMetadata|null);

        /** AIRichResponseSubMessage dynamicMetadata */
        dynamicMetadata?: (AICommonDeprecated.IAIRichResponseDynamicMetadata|null);

        /** AIRichResponseSubMessage latexMetadata */
        latexMetadata?: (AICommonDeprecated.IAIRichResponseLatexMetadata|null);

        /** AIRichResponseSubMessage mapMetadata */
        mapMetadata?: (AICommonDeprecated.IAIRichResponseMapMetadata|null);

        /** AIRichResponseSubMessage contentItemsMetadata */
        contentItemsMetadata?: (AICommonDeprecated.IAIRichResponseContentItemsMetadata|null);
    }

    /** Represents a AIRichResponseSubMessage. */
    class AIRichResponseSubMessage implements IAIRichResponseSubMessage {

        /**
         * Constructs a new AIRichResponseSubMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseSubMessage);

        /** AIRichResponseSubMessage messageType. */
        public messageType: AICommonDeprecated.AIRichResponseSubMessageType;

        /** AIRichResponseSubMessage gridImageMetadata. */
        public gridImageMetadata?: (AICommonDeprecated.IAIRichResponseGridImageMetadata|null);

        /** AIRichResponseSubMessage messageText. */
        public messageText: string;

        /** AIRichResponseSubMessage imageMetadata. */
        public imageMetadata?: (AICommonDeprecated.IAIRichResponseInlineImageMetadata|null);

        /** AIRichResponseSubMessage codeMetadata. */
        public codeMetadata?: (AICommonDeprecated.IAIRichResponseCodeMetadata|null);

        /** AIRichResponseSubMessage tableMetadata. */
        public tableMetadata?: (AICommonDeprecated.IAIRichResponseTableMetadata|null);

        /** AIRichResponseSubMessage dynamicMetadata. */
        public dynamicMetadata?: (AICommonDeprecated.IAIRichResponseDynamicMetadata|null);

        /** AIRichResponseSubMessage latexMetadata. */
        public latexMetadata?: (AICommonDeprecated.IAIRichResponseLatexMetadata|null);

        /** AIRichResponseSubMessage mapMetadata. */
        public mapMetadata?: (AICommonDeprecated.IAIRichResponseMapMetadata|null);

        /** AIRichResponseSubMessage contentItemsMetadata. */
        public contentItemsMetadata?: (AICommonDeprecated.IAIRichResponseContentItemsMetadata|null);

        /**
         * Creates a new AIRichResponseSubMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseSubMessage instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseSubMessage): AICommonDeprecated.AIRichResponseSubMessage;

        /**
         * Encodes the specified AIRichResponseSubMessage message. Does not implicitly {@link AICommonDeprecated.AIRichResponseSubMessage.verify|verify} messages.
         * @param message AIRichResponseSubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseSubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseSubMessage message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseSubMessage.verify|verify} messages.
         * @param message AIRichResponseSubMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseSubMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseSubMessage;

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseSubMessage;

        /**
         * Verifies a AIRichResponseSubMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseSubMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseSubMessage
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseSubMessage;

        /**
         * Creates a plain object from a AIRichResponseSubMessage message. Also converts values to other types if specified.
         * @param message AIRichResponseSubMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseSubMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseSubMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseSubMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a AIRichResponseContentItemsMetadata. */
    interface IAIRichResponseContentItemsMetadata {

        /** AIRichResponseContentItemsMetadata itemsMetadata */
        itemsMetadata?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata[]|null);

        /** AIRichResponseContentItemsMetadata contentType */
        contentType?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null);
    }

    /** Represents a AIRichResponseContentItemsMetadata. */
    class AIRichResponseContentItemsMetadata implements IAIRichResponseContentItemsMetadata {

        /**
         * Constructs a new AIRichResponseContentItemsMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseContentItemsMetadata);

        /** AIRichResponseContentItemsMetadata itemsMetadata. */
        public itemsMetadata: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata[];

        /** AIRichResponseContentItemsMetadata contentType. */
        public contentType: AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType;

        /**
         * Creates a new AIRichResponseContentItemsMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseContentItemsMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseContentItemsMetadata): AICommonDeprecated.AIRichResponseContentItemsMetadata;

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @param message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseContentItemsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @param message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseContentItemsMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseContentItemsMetadata;

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseContentItemsMetadata;

        /**
         * Verifies a AIRichResponseContentItemsMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseContentItemsMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseContentItemsMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseContentItemsMetadata;

        /**
         * Creates a plain object from a AIRichResponseContentItemsMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseContentItemsMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseContentItemsMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseContentItemsMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseContentItemsMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseContentItemsMetadata {

        /** Properties of a AIRichResponseContentItemMetadata. */
        interface IAIRichResponseContentItemMetadata {

            /** AIRichResponseContentItemMetadata reelItem */
            reelItem?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null);
        }

        /** Represents a AIRichResponseContentItemMetadata. */
        class AIRichResponseContentItemMetadata implements IAIRichResponseContentItemMetadata {

            /**
             * Constructs a new AIRichResponseContentItemMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata);

            /** AIRichResponseContentItemMetadata reelItem. */
            public reelItem?: (AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null);

            /** AIRichResponseContentItemMetadata aIRichResponseContentItem. */
            public aIRichResponseContentItem?: "reelItem";

            /**
             * Creates a new AIRichResponseContentItemMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseContentItemMetadata instance
             */
            public static create(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @param message AIRichResponseContentItemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @param message AIRichResponseContentItemMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Verifies a AIRichResponseContentItemMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseContentItemMetadata message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseContentItemMetadata
             */
            public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata;

            /**
             * Creates a plain object from a AIRichResponseContentItemMetadata message. Also converts values to other types if specified.
             * @param message AIRichResponseContentItemMetadata
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseContentItemMetadata to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseContentItemMetadata
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a AIRichResponseReelItem. */
        interface IAIRichResponseReelItem {

            /** AIRichResponseReelItem title */
            title?: (string|null);

            /** AIRichResponseReelItem profileIconUrl */
            profileIconUrl?: (string|null);

            /** AIRichResponseReelItem thumbnailUrl */
            thumbnailUrl?: (string|null);

            /** AIRichResponseReelItem videoUrl */
            videoUrl?: (string|null);
        }

        /** Represents a AIRichResponseReelItem. */
        class AIRichResponseReelItem implements IAIRichResponseReelItem {

            /**
             * Constructs a new AIRichResponseReelItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem);

            /** AIRichResponseReelItem title. */
            public title: string;

            /** AIRichResponseReelItem profileIconUrl. */
            public profileIconUrl: string;

            /** AIRichResponseReelItem thumbnailUrl. */
            public thumbnailUrl: string;

            /** AIRichResponseReelItem videoUrl. */
            public videoUrl: string;

            /**
             * Creates a new AIRichResponseReelItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseReelItem instance
             */
            public static create(properties?: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Encodes the specified AIRichResponseReelItem message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @param message AIRichResponseReelItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseReelItem message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @param message AIRichResponseReelItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Verifies a AIRichResponseReelItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseReelItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseReelItem
             */
            public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem;

            /**
             * Creates a plain object from a AIRichResponseReelItem message. Also converts values to other types if specified.
             * @param message AIRichResponseReelItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseReelItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseReelItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** ContentType enum. */
        enum ContentType {
            DEFAULT = 0,
            CAROUSEL = 1
        }
    }

    /** Properties of a AIRichResponseMapMetadata. */
    interface IAIRichResponseMapMetadata {

        /** AIRichResponseMapMetadata centerLatitude */
        centerLatitude?: (number|null);

        /** AIRichResponseMapMetadata centerLongitude */
        centerLongitude?: (number|null);

        /** AIRichResponseMapMetadata latitudeDelta */
        latitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata longitudeDelta */
        longitudeDelta?: (number|null);

        /** AIRichResponseMapMetadata annotations */
        annotations?: (AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation[]|null);

        /** AIRichResponseMapMetadata showInfoList */
        showInfoList?: (boolean|null);
    }

    /** Represents a AIRichResponseMapMetadata. */
    class AIRichResponseMapMetadata implements IAIRichResponseMapMetadata {

        /**
         * Constructs a new AIRichResponseMapMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseMapMetadata);

        /** AIRichResponseMapMetadata centerLatitude. */
        public centerLatitude: number;

        /** AIRichResponseMapMetadata centerLongitude. */
        public centerLongitude: number;

        /** AIRichResponseMapMetadata latitudeDelta. */
        public latitudeDelta: number;

        /** AIRichResponseMapMetadata longitudeDelta. */
        public longitudeDelta: number;

        /** AIRichResponseMapMetadata annotations. */
        public annotations: AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation[];

        /** AIRichResponseMapMetadata showInfoList. */
        public showInfoList: boolean;

        /**
         * Creates a new AIRichResponseMapMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseMapMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseMapMetadata): AICommonDeprecated.AIRichResponseMapMetadata;

        /**
         * Encodes the specified AIRichResponseMapMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.verify|verify} messages.
         * @param message AIRichResponseMapMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseMapMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseMapMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.verify|verify} messages.
         * @param message AIRichResponseMapMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseMapMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseMapMetadata;

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseMapMetadata;

        /**
         * Verifies a AIRichResponseMapMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseMapMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseMapMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseMapMetadata;

        /**
         * Creates a plain object from a AIRichResponseMapMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseMapMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseMapMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseMapMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseMapMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseMapMetadata {

        /** Properties of a AIRichResponseMapAnnotation. */
        interface IAIRichResponseMapAnnotation {

            /** AIRichResponseMapAnnotation annotationNumber */
            annotationNumber?: (number|null);

            /** AIRichResponseMapAnnotation latitude */
            latitude?: (number|null);

            /** AIRichResponseMapAnnotation longitude */
            longitude?: (number|null);

            /** AIRichResponseMapAnnotation title */
            title?: (string|null);

            /** AIRichResponseMapAnnotation body */
            body?: (string|null);
        }

        /** Represents a AIRichResponseMapAnnotation. */
        class AIRichResponseMapAnnotation implements IAIRichResponseMapAnnotation {

            /**
             * Constructs a new AIRichResponseMapAnnotation.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation);

            /** AIRichResponseMapAnnotation annotationNumber. */
            public annotationNumber: number;

            /** AIRichResponseMapAnnotation latitude. */
            public latitude: number;

            /** AIRichResponseMapAnnotation longitude. */
            public longitude: number;

            /** AIRichResponseMapAnnotation title. */
            public title: string;

            /** AIRichResponseMapAnnotation body. */
            public body: string;

            /**
             * Creates a new AIRichResponseMapAnnotation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseMapAnnotation instance
             */
            public static create(properties?: AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Encodes the specified AIRichResponseMapAnnotation message. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @param message AIRichResponseMapAnnotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseMapAnnotation message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @param message AIRichResponseMapAnnotation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Verifies a AIRichResponseMapAnnotation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseMapAnnotation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseMapAnnotation
             */
            public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation;

            /**
             * Creates a plain object from a AIRichResponseMapAnnotation message. Also converts values to other types if specified.
             * @param message AIRichResponseMapAnnotation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseMapAnnotation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseMapAnnotation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a AIRichResponseLatexMetadata. */
    interface IAIRichResponseLatexMetadata {

        /** AIRichResponseLatexMetadata text */
        text?: (string|null);

        /** AIRichResponseLatexMetadata expressions */
        expressions?: (AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression[]|null);
    }

    /** Represents a AIRichResponseLatexMetadata. */
    class AIRichResponseLatexMetadata implements IAIRichResponseLatexMetadata {

        /**
         * Constructs a new AIRichResponseLatexMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseLatexMetadata);

        /** AIRichResponseLatexMetadata text. */
        public text: string;

        /** AIRichResponseLatexMetadata expressions. */
        public expressions: AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression[];

        /**
         * Creates a new AIRichResponseLatexMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseLatexMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseLatexMetadata): AICommonDeprecated.AIRichResponseLatexMetadata;

        /**
         * Encodes the specified AIRichResponseLatexMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.verify|verify} messages.
         * @param message AIRichResponseLatexMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseLatexMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseLatexMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.verify|verify} messages.
         * @param message AIRichResponseLatexMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseLatexMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseLatexMetadata;

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseLatexMetadata;

        /**
         * Verifies a AIRichResponseLatexMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseLatexMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseLatexMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseLatexMetadata;

        /**
         * Creates a plain object from a AIRichResponseLatexMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseLatexMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseLatexMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseLatexMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseLatexMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseLatexMetadata {

        /** Properties of a AIRichResponseLatexExpression. */
        interface IAIRichResponseLatexExpression {

            /** AIRichResponseLatexExpression latexExpression */
            latexExpression?: (string|null);

            /** AIRichResponseLatexExpression url */
            url?: (string|null);

            /** AIRichResponseLatexExpression width */
            width?: (number|null);

            /** AIRichResponseLatexExpression height */
            height?: (number|null);

            /** AIRichResponseLatexExpression fontHeight */
            fontHeight?: (number|null);

            /** AIRichResponseLatexExpression imageTopPadding */
            imageTopPadding?: (number|null);

            /** AIRichResponseLatexExpression imageLeadingPadding */
            imageLeadingPadding?: (number|null);

            /** AIRichResponseLatexExpression imageBottomPadding */
            imageBottomPadding?: (number|null);

            /** AIRichResponseLatexExpression imageTrailingPadding */
            imageTrailingPadding?: (number|null);
        }

        /** Represents a AIRichResponseLatexExpression. */
        class AIRichResponseLatexExpression implements IAIRichResponseLatexExpression {

            /**
             * Constructs a new AIRichResponseLatexExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression);

            /** AIRichResponseLatexExpression latexExpression. */
            public latexExpression: string;

            /** AIRichResponseLatexExpression url. */
            public url: string;

            /** AIRichResponseLatexExpression width. */
            public width: number;

            /** AIRichResponseLatexExpression height. */
            public height: number;

            /** AIRichResponseLatexExpression fontHeight. */
            public fontHeight: number;

            /** AIRichResponseLatexExpression imageTopPadding. */
            public imageTopPadding: number;

            /** AIRichResponseLatexExpression imageLeadingPadding. */
            public imageLeadingPadding: number;

            /** AIRichResponseLatexExpression imageBottomPadding. */
            public imageBottomPadding: number;

            /** AIRichResponseLatexExpression imageTrailingPadding. */
            public imageTrailingPadding: number;

            /**
             * Creates a new AIRichResponseLatexExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseLatexExpression instance
             */
            public static create(properties?: AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Encodes the specified AIRichResponseLatexExpression message. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @param message AIRichResponseLatexExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseLatexExpression message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @param message AIRichResponseLatexExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Verifies a AIRichResponseLatexExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseLatexExpression message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseLatexExpression
             */
            public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression;

            /**
             * Creates a plain object from a AIRichResponseLatexExpression message. Also converts values to other types if specified.
             * @param message AIRichResponseLatexExpression
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseLatexExpression to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseLatexExpression
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a AIRichResponseDynamicMetadata. */
    interface IAIRichResponseDynamicMetadata {

        /** AIRichResponseDynamicMetadata type */
        type?: (AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null);

        /** AIRichResponseDynamicMetadata version */
        version?: (number|Long|null);

        /** AIRichResponseDynamicMetadata url */
        url?: (string|null);

        /** AIRichResponseDynamicMetadata loopCount */
        loopCount?: (number|null);
    }

    /** Represents a AIRichResponseDynamicMetadata. */
    class AIRichResponseDynamicMetadata implements IAIRichResponseDynamicMetadata {

        /**
         * Constructs a new AIRichResponseDynamicMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseDynamicMetadata);

        /** AIRichResponseDynamicMetadata type. */
        public type: AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType;

        /** AIRichResponseDynamicMetadata version. */
        public version: (number|Long);

        /** AIRichResponseDynamicMetadata url. */
        public url: string;

        /** AIRichResponseDynamicMetadata loopCount. */
        public loopCount: number;

        /**
         * Creates a new AIRichResponseDynamicMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseDynamicMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseDynamicMetadata): AICommonDeprecated.AIRichResponseDynamicMetadata;

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @param message AIRichResponseDynamicMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseDynamicMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @param message AIRichResponseDynamicMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseDynamicMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseDynamicMetadata;

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseDynamicMetadata;

        /**
         * Verifies a AIRichResponseDynamicMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseDynamicMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseDynamicMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseDynamicMetadata;

        /**
         * Creates a plain object from a AIRichResponseDynamicMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseDynamicMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseDynamicMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseDynamicMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseDynamicMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseDynamicMetadata {

        /** AIRichResponseDynamicMetadataType enum. */
        enum AIRichResponseDynamicMetadataType {
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,
            AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2
        }
    }

    /** Properties of a AIRichResponseTableMetadata. */
    interface IAIRichResponseTableMetadata {

        /** AIRichResponseTableMetadata rows */
        rows?: (AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow[]|null);

        /** AIRichResponseTableMetadata title */
        title?: (string|null);
    }

    /** Represents a AIRichResponseTableMetadata. */
    class AIRichResponseTableMetadata implements IAIRichResponseTableMetadata {

        /**
         * Constructs a new AIRichResponseTableMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseTableMetadata);

        /** AIRichResponseTableMetadata rows. */
        public rows: AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow[];

        /** AIRichResponseTableMetadata title. */
        public title: string;

        /**
         * Creates a new AIRichResponseTableMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseTableMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseTableMetadata): AICommonDeprecated.AIRichResponseTableMetadata;

        /**
         * Encodes the specified AIRichResponseTableMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.verify|verify} messages.
         * @param message AIRichResponseTableMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseTableMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseTableMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.verify|verify} messages.
         * @param message AIRichResponseTableMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseTableMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseTableMetadata;

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseTableMetadata;

        /**
         * Verifies a AIRichResponseTableMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseTableMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseTableMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseTableMetadata;

        /**
         * Creates a plain object from a AIRichResponseTableMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseTableMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseTableMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseTableMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseTableMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseTableMetadata {

        /** Properties of a AIRichResponseTableRow. */
        interface IAIRichResponseTableRow {

            /** AIRichResponseTableRow items */
            items?: (string[]|null);

            /** AIRichResponseTableRow isHeading */
            isHeading?: (boolean|null);
        }

        /** Represents a AIRichResponseTableRow. */
        class AIRichResponseTableRow implements IAIRichResponseTableRow {

            /**
             * Constructs a new AIRichResponseTableRow.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow);

            /** AIRichResponseTableRow items. */
            public items: string[];

            /** AIRichResponseTableRow isHeading. */
            public isHeading: boolean;

            /**
             * Creates a new AIRichResponseTableRow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseTableRow instance
             */
            public static create(properties?: AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Encodes the specified AIRichResponseTableRow message. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @param message AIRichResponseTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseTableRow message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @param message AIRichResponseTableRow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Verifies a AIRichResponseTableRow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseTableRow message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseTableRow
             */
            public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow;

            /**
             * Creates a plain object from a AIRichResponseTableRow message. Also converts values to other types if specified.
             * @param message AIRichResponseTableRow
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseTableRow to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseTableRow
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a AIRichResponseCodeMetadata. */
    interface IAIRichResponseCodeMetadata {

        /** AIRichResponseCodeMetadata codeLanguage */
        codeLanguage?: (string|null);

        /** AIRichResponseCodeMetadata codeBlocks */
        codeBlocks?: (AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock[]|null);
    }

    /** Represents a AIRichResponseCodeMetadata. */
    class AIRichResponseCodeMetadata implements IAIRichResponseCodeMetadata {

        /**
         * Constructs a new AIRichResponseCodeMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseCodeMetadata);

        /** AIRichResponseCodeMetadata codeLanguage. */
        public codeLanguage: string;

        /** AIRichResponseCodeMetadata codeBlocks. */
        public codeBlocks: AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock[];

        /**
         * Creates a new AIRichResponseCodeMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseCodeMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseCodeMetadata): AICommonDeprecated.AIRichResponseCodeMetadata;

        /**
         * Encodes the specified AIRichResponseCodeMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.verify|verify} messages.
         * @param message AIRichResponseCodeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseCodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseCodeMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.verify|verify} messages.
         * @param message AIRichResponseCodeMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseCodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseCodeMetadata;

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseCodeMetadata;

        /**
         * Verifies a AIRichResponseCodeMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseCodeMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseCodeMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseCodeMetadata;

        /**
         * Creates a plain object from a AIRichResponseCodeMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseCodeMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseCodeMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseCodeMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseCodeMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseCodeMetadata {

        /** Properties of a AIRichResponseCodeBlock. */
        interface IAIRichResponseCodeBlock {

            /** AIRichResponseCodeBlock highlightType */
            highlightType?: (AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null);

            /** AIRichResponseCodeBlock codeContent */
            codeContent?: (string|null);
        }

        /** Represents a AIRichResponseCodeBlock. */
        class AIRichResponseCodeBlock implements IAIRichResponseCodeBlock {

            /**
             * Constructs a new AIRichResponseCodeBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock);

            /** AIRichResponseCodeBlock highlightType. */
            public highlightType: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType;

            /** AIRichResponseCodeBlock codeContent. */
            public codeContent: string;

            /**
             * Creates a new AIRichResponseCodeBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AIRichResponseCodeBlock instance
             */
            public static create(properties?: AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Encodes the specified AIRichResponseCodeBlock message. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @param message AIRichResponseCodeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AIRichResponseCodeBlock message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @param message AIRichResponseCodeBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Verifies a AIRichResponseCodeBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AIRichResponseCodeBlock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AIRichResponseCodeBlock
             */
            public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock;

            /**
             * Creates a plain object from a AIRichResponseCodeBlock message. Also converts values to other types if specified.
             * @param message AIRichResponseCodeBlock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AIRichResponseCodeBlock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AIRichResponseCodeBlock
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** AIRichResponseCodeHighlightType enum. */
        enum AIRichResponseCodeHighlightType {
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,
            AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5
        }
    }

    /** Properties of a AIRichResponseInlineImageMetadata. */
    interface IAIRichResponseInlineImageMetadata {

        /** AIRichResponseInlineImageMetadata imageUrl */
        imageUrl?: (AICommonDeprecated.IAIRichResponseImageURL|null);

        /** AIRichResponseInlineImageMetadata imageText */
        imageText?: (string|null);

        /** AIRichResponseInlineImageMetadata alignment */
        alignment?: (AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null);

        /** AIRichResponseInlineImageMetadata tapLinkUrl */
        tapLinkUrl?: (string|null);
    }

    /** Represents a AIRichResponseInlineImageMetadata. */
    class AIRichResponseInlineImageMetadata implements IAIRichResponseInlineImageMetadata {

        /**
         * Constructs a new AIRichResponseInlineImageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseInlineImageMetadata);

        /** AIRichResponseInlineImageMetadata imageUrl. */
        public imageUrl?: (AICommonDeprecated.IAIRichResponseImageURL|null);

        /** AIRichResponseInlineImageMetadata imageText. */
        public imageText: string;

        /** AIRichResponseInlineImageMetadata alignment. */
        public alignment: AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment;

        /** AIRichResponseInlineImageMetadata tapLinkUrl. */
        public tapLinkUrl: string;

        /**
         * Creates a new AIRichResponseInlineImageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseInlineImageMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseInlineImageMetadata): AICommonDeprecated.AIRichResponseInlineImageMetadata;

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @param message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseInlineImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @param message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseInlineImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseInlineImageMetadata;

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseInlineImageMetadata;

        /**
         * Verifies a AIRichResponseInlineImageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseInlineImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseInlineImageMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseInlineImageMetadata;

        /**
         * Creates a plain object from a AIRichResponseInlineImageMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseInlineImageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseInlineImageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseInlineImageMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseInlineImageMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AIRichResponseInlineImageMetadata {

        /** AIRichResponseImageAlignment enum. */
        enum AIRichResponseImageAlignment {
            AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,
            AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2
        }
    }

    /** Properties of a AIRichResponseGridImageMetadata. */
    interface IAIRichResponseGridImageMetadata {

        /** AIRichResponseGridImageMetadata gridImageUrl */
        gridImageUrl?: (AICommonDeprecated.IAIRichResponseImageURL|null);

        /** AIRichResponseGridImageMetadata imageUrls */
        imageUrls?: (AICommonDeprecated.IAIRichResponseImageURL[]|null);
    }

    /** Represents a AIRichResponseGridImageMetadata. */
    class AIRichResponseGridImageMetadata implements IAIRichResponseGridImageMetadata {

        /**
         * Constructs a new AIRichResponseGridImageMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseGridImageMetadata);

        /** AIRichResponseGridImageMetadata gridImageUrl. */
        public gridImageUrl?: (AICommonDeprecated.IAIRichResponseImageURL|null);

        /** AIRichResponseGridImageMetadata imageUrls. */
        public imageUrls: AICommonDeprecated.IAIRichResponseImageURL[];

        /**
         * Creates a new AIRichResponseGridImageMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseGridImageMetadata instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseGridImageMetadata): AICommonDeprecated.AIRichResponseGridImageMetadata;

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @param message AIRichResponseGridImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseGridImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @param message AIRichResponseGridImageMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseGridImageMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseGridImageMetadata;

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseGridImageMetadata;

        /**
         * Verifies a AIRichResponseGridImageMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseGridImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseGridImageMetadata
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseGridImageMetadata;

        /**
         * Creates a plain object from a AIRichResponseGridImageMetadata message. Also converts values to other types if specified.
         * @param message AIRichResponseGridImageMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseGridImageMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseGridImageMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseGridImageMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a AIRichResponseImageURL. */
    interface IAIRichResponseImageURL {

        /** AIRichResponseImageURL imagePreviewUrl */
        imagePreviewUrl?: (string|null);

        /** AIRichResponseImageURL imageHighResUrl */
        imageHighResUrl?: (string|null);

        /** AIRichResponseImageURL sourceUrl */
        sourceUrl?: (string|null);
    }

    /** Represents a AIRichResponseImageURL. */
    class AIRichResponseImageURL implements IAIRichResponseImageURL {

        /**
         * Constructs a new AIRichResponseImageURL.
         * @param [properties] Properties to set
         */
        constructor(properties?: AICommonDeprecated.IAIRichResponseImageURL);

        /** AIRichResponseImageURL imagePreviewUrl. */
        public imagePreviewUrl: string;

        /** AIRichResponseImageURL imageHighResUrl. */
        public imageHighResUrl: string;

        /** AIRichResponseImageURL sourceUrl. */
        public sourceUrl: string;

        /**
         * Creates a new AIRichResponseImageURL instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AIRichResponseImageURL instance
         */
        public static create(properties?: AICommonDeprecated.IAIRichResponseImageURL): AICommonDeprecated.AIRichResponseImageURL;

        /**
         * Encodes the specified AIRichResponseImageURL message. Does not implicitly {@link AICommonDeprecated.AIRichResponseImageURL.verify|verify} messages.
         * @param message AIRichResponseImageURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AICommonDeprecated.IAIRichResponseImageURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AIRichResponseImageURL message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseImageURL.verify|verify} messages.
         * @param message AIRichResponseImageURL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AICommonDeprecated.IAIRichResponseImageURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AICommonDeprecated.AIRichResponseImageURL;

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AICommonDeprecated.AIRichResponseImageURL;

        /**
         * Verifies a AIRichResponseImageURL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a AIRichResponseImageURL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AIRichResponseImageURL
         */
        public static fromObject(object: { [k: string]: any }): AICommonDeprecated.AIRichResponseImageURL;

        /**
         * Creates a plain object from a AIRichResponseImageURL message. Also converts values to other types if specified.
         * @param message AIRichResponseImageURL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AICommonDeprecated.AIRichResponseImageURL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AIRichResponseImageURL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AIRichResponseImageURL
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** AIRichResponseSubMessageType enum. */
    enum AIRichResponseSubMessageType {
        AI_RICH_RESPONSE_UNKNOWN = 0,
        AI_RICH_RESPONSE_GRID_IMAGE = 1,
        AI_RICH_RESPONSE_TEXT = 2,
        AI_RICH_RESPONSE_INLINE_IMAGE = 3,
        AI_RICH_RESPONSE_TABLE = 4,
        AI_RICH_RESPONSE_CODE = 5,
        AI_RICH_RESPONSE_DYNAMIC = 6,
        AI_RICH_RESPONSE_MAP = 7,
        AI_RICH_RESPONSE_LATEX = 8,
        AI_RICH_RESPONSE_CONTENT_ITEMS = 9
    }

    /** AIRichResponseMessageType enum. */
    enum AIRichResponseMessageType {
        AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,
        AI_RICH_RESPONSE_TYPE_STANDARD = 1
    }
}

/** Namespace StatusAttributions. */
export namespace StatusAttributions {

    /** Properties of a StatusAttribution. */
    interface IStatusAttribution {

        /** StatusAttribution type */
        type?: (StatusAttributions.StatusAttribution.Type|null);

        /** StatusAttribution actionUrl */
        actionUrl?: (string|null);

        /** StatusAttribution statusReshare */
        statusReshare?: (StatusAttributions.StatusAttribution.IStatusReshare|null);

        /** StatusAttribution externalShare */
        externalShare?: (StatusAttributions.StatusAttribution.IExternalShare|null);

        /** StatusAttribution music */
        music?: (StatusAttributions.StatusAttribution.IMusic|null);

        /** StatusAttribution groupStatus */
        groupStatus?: (StatusAttributions.StatusAttribution.IGroupStatus|null);

        /** StatusAttribution rlAttribution */
        rlAttribution?: (StatusAttributions.StatusAttribution.IRLAttribution|null);

        /** StatusAttribution aiCreatedAttribution */
        aiCreatedAttribution?: (StatusAttributions.StatusAttribution.IAiCreatedAttribution|null);
    }

    /** Represents a StatusAttribution. */
    class StatusAttribution implements IStatusAttribution {

        /**
         * Constructs a new StatusAttribution.
         * @param [properties] Properties to set
         */
        constructor(properties?: StatusAttributions.IStatusAttribution);

        /** StatusAttribution type. */
        public type: StatusAttributions.StatusAttribution.Type;

        /** StatusAttribution actionUrl. */
        public actionUrl: string;

        /** StatusAttribution statusReshare. */
        public statusReshare?: (StatusAttributions.StatusAttribution.IStatusReshare|null);

        /** StatusAttribution externalShare. */
        public externalShare?: (StatusAttributions.StatusAttribution.IExternalShare|null);

        /** StatusAttribution music. */
        public music?: (StatusAttributions.StatusAttribution.IMusic|null);

        /** StatusAttribution groupStatus. */
        public groupStatus?: (StatusAttributions.StatusAttribution.IGroupStatus|null);

        /** StatusAttribution rlAttribution. */
        public rlAttribution?: (StatusAttributions.StatusAttribution.IRLAttribution|null);

        /** StatusAttribution aiCreatedAttribution. */
        public aiCreatedAttribution?: (StatusAttributions.StatusAttribution.IAiCreatedAttribution|null);

        /** StatusAttribution attributionData. */
        public attributionData?: ("statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution");

        /**
         * Creates a new StatusAttribution instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusAttribution instance
         */
        public static create(properties?: StatusAttributions.IStatusAttribution): StatusAttributions.StatusAttribution;

        /**
         * Encodes the specified StatusAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @param message StatusAttribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: StatusAttributions.IStatusAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @param message StatusAttribution message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: StatusAttributions.IStatusAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution;

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution;

        /**
         * Verifies a StatusAttribution message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusAttribution message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusAttribution
         */
        public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution;

        /**
         * Creates a plain object from a StatusAttribution message. Also converts values to other types if specified.
         * @param message StatusAttribution
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: StatusAttributions.StatusAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusAttribution to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StatusAttribution
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace StatusAttribution {

        /** Properties of an AiCreatedAttribution. */
        interface IAiCreatedAttribution {

            /** AiCreatedAttribution source */
            source?: (StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null);
        }

        /** Represents an AiCreatedAttribution. */
        class AiCreatedAttribution implements IAiCreatedAttribution {

            /**
             * Constructs a new AiCreatedAttribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IAiCreatedAttribution);

            /** AiCreatedAttribution source. */
            public source: StatusAttributions.StatusAttribution.AiCreatedAttribution.Source;

            /**
             * Creates a new AiCreatedAttribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiCreatedAttribution instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IAiCreatedAttribution): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Encodes the specified AiCreatedAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @param message AiCreatedAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IAiCreatedAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AiCreatedAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @param message AiCreatedAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IAiCreatedAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Verifies an AiCreatedAttribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiCreatedAttribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiCreatedAttribution
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.AiCreatedAttribution;

            /**
             * Creates a plain object from an AiCreatedAttribution message. Also converts values to other types if specified.
             * @param message AiCreatedAttribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.AiCreatedAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiCreatedAttribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AiCreatedAttribution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AiCreatedAttribution {

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                STATUS_MIMICRY = 1
            }
        }

        /** Properties of an ExternalShare. */
        interface IExternalShare {

            /** ExternalShare actionUrl */
            actionUrl?: (string|null);

            /** ExternalShare source */
            source?: (StatusAttributions.StatusAttribution.ExternalShare.Source|null);

            /** ExternalShare duration */
            duration?: (number|null);

            /** ExternalShare actionFallbackUrl */
            actionFallbackUrl?: (string|null);
        }

        /** Represents an ExternalShare. */
        class ExternalShare implements IExternalShare {

            /**
             * Constructs a new ExternalShare.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IExternalShare);

            /** ExternalShare actionUrl. */
            public actionUrl: string;

            /** ExternalShare source. */
            public source: StatusAttributions.StatusAttribution.ExternalShare.Source;

            /** ExternalShare duration. */
            public duration: number;

            /** ExternalShare actionFallbackUrl. */
            public actionFallbackUrl: string;

            /**
             * Creates a new ExternalShare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalShare instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IExternalShare): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Encodes the specified ExternalShare message. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @param message ExternalShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IExternalShare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExternalShare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @param message ExternalShare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IExternalShare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalShare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Decodes an ExternalShare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Verifies an ExternalShare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExternalShare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalShare
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.ExternalShare;

            /**
             * Creates a plain object from an ExternalShare message. Also converts values to other types if specified.
             * @param message ExternalShare
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.ExternalShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalShare to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExternalShare
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExternalShare {

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                INSTAGRAM = 1,
                FACEBOOK = 2,
                MESSENGER = 3,
                SPOTIFY = 4,
                YOUTUBE = 5,
                PINTEREST = 6,
                THREADS = 7,
                APPLE_MUSIC = 8,
                SHARECHAT = 9,
                GOOGLE_PHOTOS = 10
            }
        }

        /** Properties of a GroupStatus. */
        interface IGroupStatus {

            /** GroupStatus authorJid */
            authorJid?: (string|null);
        }

        /** Represents a GroupStatus. */
        class GroupStatus implements IGroupStatus {

            /**
             * Constructs a new GroupStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IGroupStatus);

            /** GroupStatus authorJid. */
            public authorJid: string;

            /**
             * Creates a new GroupStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GroupStatus instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IGroupStatus): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Encodes the specified GroupStatus message. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @param message GroupStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GroupStatus message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @param message GroupStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IGroupStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GroupStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Decodes a GroupStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Verifies a GroupStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GroupStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GroupStatus
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.GroupStatus;

            /**
             * Creates a plain object from a GroupStatus message. Also converts values to other types if specified.
             * @param message GroupStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.GroupStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GroupStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GroupStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Music. */
        interface IMusic {

            /** Music authorName */
            authorName?: (string|null);

            /** Music songId */
            songId?: (string|null);

            /** Music title */
            title?: (string|null);

            /** Music author */
            author?: (string|null);

            /** Music artistAttribution */
            artistAttribution?: (string|null);

            /** Music isExplicit */
            isExplicit?: (boolean|null);
        }

        /** Represents a Music. */
        class Music implements IMusic {

            /**
             * Constructs a new Music.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IMusic);

            /** Music authorName. */
            public authorName: string;

            /** Music songId. */
            public songId: string;

            /** Music title. */
            public title: string;

            /** Music author. */
            public author: string;

            /** Music artistAttribution. */
            public artistAttribution: string;

            /** Music isExplicit. */
            public isExplicit: boolean;

            /**
             * Creates a new Music instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Music instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IMusic): StatusAttributions.StatusAttribution.Music;

            /**
             * Encodes the specified Music message. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @param message Music message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IMusic, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Music message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @param message Music message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IMusic, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Music message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.Music;

            /**
             * Decodes a Music message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.Music;

            /**
             * Verifies a Music message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Music message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Music
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.Music;

            /**
             * Creates a plain object from a Music message. Also converts values to other types if specified.
             * @param message Music
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.Music, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Music to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Music
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RLAttribution. */
        interface IRLAttribution {

            /** RLAttribution source */
            source?: (StatusAttributions.StatusAttribution.RLAttribution.Source|null);
        }

        /** Represents a RLAttribution. */
        class RLAttribution implements IRLAttribution {

            /**
             * Constructs a new RLAttribution.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IRLAttribution);

            /** RLAttribution source. */
            public source: StatusAttributions.StatusAttribution.RLAttribution.Source;

            /**
             * Creates a new RLAttribution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RLAttribution instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IRLAttribution): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Encodes the specified RLAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @param message RLAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IRLAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RLAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @param message RLAttribution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IRLAttribution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RLAttribution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Decodes a RLAttribution message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Verifies a RLAttribution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RLAttribution message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RLAttribution
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.RLAttribution;

            /**
             * Creates a plain object from a RLAttribution message. Also converts values to other types if specified.
             * @param message RLAttribution
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.RLAttribution, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RLAttribution to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RLAttribution
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RLAttribution {

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                RAY_BAN_META_GLASSES = 1,
                OAKLEY_META_GLASSES = 2,
                HYPERNOVA_GLASSES = 3
            }
        }

        /** Properties of a StatusReshare. */
        interface IStatusReshare {

            /** StatusReshare source */
            source?: (StatusAttributions.StatusAttribution.StatusReshare.Source|null);

            /** StatusReshare metadata */
            metadata?: (StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);
        }

        /** Represents a StatusReshare. */
        class StatusReshare implements IStatusReshare {

            /**
             * Constructs a new StatusReshare.
             * @param [properties] Properties to set
             */
            constructor(properties?: StatusAttributions.StatusAttribution.IStatusReshare);

            /** StatusReshare source. */
            public source: StatusAttributions.StatusAttribution.StatusReshare.Source;

            /** StatusReshare metadata. */
            public metadata?: (StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null);

            /**
             * Creates a new StatusReshare instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StatusReshare instance
             */
            public static create(properties?: StatusAttributions.StatusAttribution.IStatusReshare): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Encodes the specified StatusReshare message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @param message StatusReshare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: StatusAttributions.StatusAttribution.IStatusReshare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StatusReshare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @param message StatusReshare message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: StatusAttributions.StatusAttribution.IStatusReshare, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StatusReshare message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Decodes a StatusReshare message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Verifies a StatusReshare message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StatusReshare message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StatusReshare
             */
            public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare;

            /**
             * Creates a plain object from a StatusReshare message. Also converts values to other types if specified.
             * @param message StatusReshare
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: StatusAttributions.StatusAttribution.StatusReshare, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StatusReshare to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StatusReshare
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace StatusReshare {

            /** Properties of a Metadata. */
            interface IMetadata {

                /** Metadata duration */
                duration?: (number|null);

                /** Metadata channelJid */
                channelJid?: (string|null);

                /** Metadata channelMessageId */
                channelMessageId?: (number|null);

                /** Metadata hasMultipleReshares */
                hasMultipleReshares?: (boolean|null);
            }

            /** Represents a Metadata. */
            class Metadata implements IMetadata {

                /**
                 * Constructs a new Metadata.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: StatusAttributions.StatusAttribution.StatusReshare.IMetadata);

                /** Metadata duration. */
                public duration: number;

                /** Metadata channelJid. */
                public channelJid: string;

                /** Metadata channelMessageId. */
                public channelMessageId: number;

                /** Metadata hasMultipleReshares. */
                public hasMultipleReshares: boolean;

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Metadata instance
                 */
                public static create(properties?: StatusAttributions.StatusAttribution.StatusReshare.IMetadata): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: StatusAttributions.StatusAttribution.StatusReshare.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @param message Metadata message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: StatusAttributions.StatusAttribution.StatusReshare.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Verifies a Metadata message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Metadata
                 */
                public static fromObject(object: { [k: string]: any }): StatusAttributions.StatusAttribution.StatusReshare.Metadata;

                /**
                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                 * @param message Metadata
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: StatusAttributions.StatusAttribution.StatusReshare.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Metadata to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Metadata
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Source enum. */
            enum Source {
                UNKNOWN = 0,
                INTERNAL_RESHARE = 1,
                MENTION_RESHARE = 2,
                CHANNEL_RESHARE = 3,
                FORWARD = 4
            }
        }

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            RESHARE = 1,
            EXTERNAL_SHARE = 2,
            MUSIC = 3,
            STATUS_MENTION = 4,
            GROUP_STATUS = 5,
            RL_ATTRIBUTION = 6,
            AI_CREATED = 7,
            LAYOUTS = 8,
            NEWSLETTER_STATUS = 9,
            STATUS_CLOSE_SHARING = 10
        }
    }
}
