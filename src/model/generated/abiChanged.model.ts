import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Resolver} from "./resolver.model"

@Entity_()
export class AbiChanged {
    constructor(props?: Partial<AbiChanged>) {
        Object.assign(this, props)
    }

    /**
     * Concatenation of block number and log ID
     */
    @PrimaryColumn_()
    id!: string

    /**
     * Used to derive relationships to Resolvers
     */
    @Index_()
    @ManyToOne_(() => Resolver, {nullable: true})
    resolver!: Resolver

    /**
     * The block number at which the event was emitted
     */
    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The transaction hash of the transaction in which the event was emitted
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The content type of the ABI change
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    contentType!: bigint
}
