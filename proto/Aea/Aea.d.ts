import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace Aea. */
export namespace Aea {

    /** Properties of a NonE2EEAttestation. */
    interface INonE2EEAttestation {

        /** NonE2EEAttestation accountType */
        accountType?: (Aea.NonE2EEAttestation.AccountType|null);
    }

    /** Represents a NonE2EEAttestation. */
    class NonE2EEAttestation implements INonE2EEAttestation {

        /**
         * Constructs a new NonE2EEAttestation.
         * @param [properties] Properties to set
         */
        constructor(properties?: Aea.INonE2EEAttestation);

        /** NonE2EEAttestation accountType. */
        public accountType: Aea.NonE2EEAttestation.AccountType;

        /**
         * Creates a new NonE2EEAttestation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NonE2EEAttestation instance
         */
        public static create(properties?: Aea.INonE2EEAttestation): Aea.NonE2EEAttestation;

        /**
         * Encodes the specified NonE2EEAttestation message. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @param message NonE2EEAttestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Aea.INonE2EEAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NonE2EEAttestation message, length delimited. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @param message NonE2EEAttestation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Aea.INonE2EEAttestation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Aea.NonE2EEAttestation;

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Aea.NonE2EEAttestation;

        /**
         * Verifies a NonE2EEAttestation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NonE2EEAttestation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NonE2EEAttestation
         */
        public static fromObject(object: { [k: string]: any }): Aea.NonE2EEAttestation;

        /**
         * Creates a plain object from a NonE2EEAttestation message. Also converts values to other types if specified.
         * @param message NonE2EEAttestation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Aea.NonE2EEAttestation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NonE2EEAttestation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NonE2EEAttestation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace NonE2EEAttestation {

        /** AccountType enum. */
        enum AccountType {
            E2EE = 0,
            HYBRID_E2EE = 1,
            NON_E2EE = 2
        }
    }
}
