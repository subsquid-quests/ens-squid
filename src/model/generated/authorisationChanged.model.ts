import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Resolver} from "./resolver.model"

@Entity_()
export class AuthorisationChanged {
    constructor(props?: Partial<AuthorisationChanged>) {
        Object.assign(this, props)
    }

    /**
     * Unique identifier for this event
     */
    @PrimaryColumn_()
    id!: string

    /**
     * The resolver associated with this event
     */
    @Index_()
    @ManyToOne_(() => Resolver, {nullable: true})
    resolver!: Resolver

    /**
     * The block number at which the event occurred
     */
    @Column_("int4", {nullable: false})
    blockNumber!: number

    /**
     * The transaction hash associated with the event
     */
    @Column_("bytea", {nullable: false})
    transactionID!: Uint8Array

    /**
     * The owner of the authorisation
     */
    @Column_("bytea", {nullable: false})
    owner!: Uint8Array

    /**
     * The target of the authorisation
     */
    @Column_("bytea", {nullable: false})
    target!: Uint8Array

    /**
     * Whether the authorisation was added or removed
     */
    @Column_("bool", {nullable: false})
    isAuthorized!: boolean
}
