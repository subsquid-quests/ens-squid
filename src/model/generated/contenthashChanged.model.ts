import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Resolver} from "./resolver.model"

@Entity_()
export class ContenthashChanged {
    constructor(props?: Partial<ContenthashChanged>) {
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
     * The block number where the event occurred
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The ID of the transaction where the event occurred
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The new content hash for the domain
     */
    @Column_("bytea", {nullable: false})
    hash!: Uint8Array
}
