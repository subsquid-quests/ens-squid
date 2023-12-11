import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Resolver} from "./resolver.model"

@Entity_()
export class TextChanged {
    constructor(props?: Partial<TextChanged>) {
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
     * Block number of the Ethereum block in which the event occurred
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * Hash of the Ethereum transaction in which the event occurred
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The key of the text record that was changed
     */
    @Column_("text", {nullable: false})
    key!: string

    /**
     * The new value of the text record that was changed
     */
    @Column_("text", {nullable: true})
    value!: string | undefined | null
}
