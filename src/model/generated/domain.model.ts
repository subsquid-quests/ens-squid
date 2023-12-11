import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Resolver} from "./resolver.model"
import {Registration} from "./registration.model"
import {WrappedDomain} from "./wrappedDomain.model"

@Entity_()
export class Domain {
    constructor(props?: Partial<Domain>) {
        Object.assign(this, props)
    }

    /**
     * The namehash of the name
     */
    @PrimaryColumn_()
    id!: string

    /**
     * The human readable name, if known. Unknown portions replaced with hash in square brackets (eg, foo.[1234].eth)
     */
    @Column_("text", {nullable: true})
    name!: string | undefined | null

    /**
     * The human readable label name (imported from CSV), if known
     */
    @Index_()
    @Column_("text", {nullable: true})
    labelName!: string | undefined | null

    /**
     * keccak256(labelName)
     */
    @Index_()
    @Column_("bytea", {nullable: true})
    labelhash!: Uint8Array | undefined | null

    /**
     * The namehash (id) of the parent name
     */
    @Index_()
    @ManyToOne_(() => Domain, {nullable: true})
    parent!: Domain | undefined | null

    /**
     * Can count domains from length of array
     */
    @OneToMany_(() => Domain, e => e.parent)
    subdomains!: Domain[]

    /**
     * The number of subdomains
     */
    @Column_("int4", {nullable: false})
    subdomainCount!: number

    /**
     * Address logged from current resolver, if any
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    resolvedAddress!: Account | undefined | null

    /**
     * The resolver that controls the domain's settings
     */
    @Index_()
    @ManyToOne_(() => Resolver, {nullable: true})
    resolver!: Resolver | undefined | null

    /**
     * The time-to-live (TTL) value of the domain's records
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    ttl!: bigint | undefined | null

    /**
     * Indicates whether the domain has been migrated to a new registrar
     */
    @Column_("bool", {nullable: false})
    isMigrated!: boolean

    /**
     * The time when the domain was created
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    createdAt!: bigint

    /**
     * The account that owns the domain
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    /**
     * The account that owns the ERC721 NFT for the domain
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    registrant!: Account | undefined | null

    /**
     * The account that owns the wrapped domain
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    wrappedOwner!: Account | undefined | null

    /**
     * The expiry date for the domain, from either the registration, or the wrapped domain if PCC is burned
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    expiryDate!: bigint | undefined | null

    /**
     * The registration associated with the domain
     */

    /**
     * The wrapped domain associated with the domain
     */
}
