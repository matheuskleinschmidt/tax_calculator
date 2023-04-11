
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Dinosaur
 * 
 */
export type Dinosaur = {
  id: number
  name: string
  description: string
}

/**
 * Model taxation
 * 
 */
export type taxation = {
  id: number
  name: string
  value: number
  isPercentage: boolean
  isDividedOneHundred: boolean
}

/**
 * Model range
 * 
 */
export type range = {
  id: number
  name: string
  description: string
}

/**
 * Model type
 * 
 */
export type type = {
  id: number
  name: string
  description: string
}

/**
 * Model rangeTaxation
 * 
 */
export type rangeTaxation = {
  id: number
  rangeId: number
  taxationId: number
}

/**
 * Model typeRange
 * 
 */
export type typeRange = {
  id: number
  typeId: number
  rangeId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dinosaurs
 * const dinosaurs = await prisma.dinosaur.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dinosaurs
   * const dinosaurs = await prisma.dinosaur.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.dinosaur`: Exposes CRUD operations for the **Dinosaur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dinosaurs
    * const dinosaurs = await prisma.dinosaur.findMany()
    * ```
    */
  get dinosaur(): Prisma.DinosaurDelegate<GlobalReject>;

  /**
   * `prisma.taxation`: Exposes CRUD operations for the **taxation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Taxations
    * const taxations = await prisma.taxation.findMany()
    * ```
    */
  get taxation(): Prisma.taxationDelegate<GlobalReject>;

  /**
   * `prisma.range`: Exposes CRUD operations for the **range** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ranges
    * const ranges = await prisma.range.findMany()
    * ```
    */
  get range(): Prisma.rangeDelegate<GlobalReject>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.typeDelegate<GlobalReject>;

  /**
   * `prisma.rangeTaxation`: Exposes CRUD operations for the **rangeTaxation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RangeTaxations
    * const rangeTaxations = await prisma.rangeTaxation.findMany()
    * ```
    */
  get rangeTaxation(): Prisma.rangeTaxationDelegate<GlobalReject>;

  /**
   * `prisma.typeRange`: Exposes CRUD operations for the **typeRange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeRanges
    * const typeRanges = await prisma.typeRange.findMany()
    * ```
    */
  get typeRange(): Prisma.typeRangeDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dinosaur: 'Dinosaur',
    taxation: 'taxation',
    range: 'range',
    type: 'type',
    rangeTaxation: 'rangeTaxation',
    typeRange: 'typeRange'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TaxationCountOutputType
   */


  export type TaxationCountOutputType = {
    rangeTaxation: number
  }

  export type TaxationCountOutputTypeSelect = {
    rangeTaxation?: boolean
  }

  export type TaxationCountOutputTypeGetPayload<S extends boolean | null | undefined | TaxationCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TaxationCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TaxationCountOutputTypeArgs)
    ? TaxationCountOutputType 
    : S extends { select: any } & (TaxationCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TaxationCountOutputType ? TaxationCountOutputType[P] : never
  } 
      : TaxationCountOutputType




  // Custom InputTypes

  /**
   * TaxationCountOutputType without action
   */
  export type TaxationCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TaxationCountOutputType
     */
    select?: TaxationCountOutputTypeSelect | null
  }



  /**
   * Count Type RangeCountOutputType
   */


  export type RangeCountOutputType = {
    rangeTaxation: number
    typeRange: number
  }

  export type RangeCountOutputTypeSelect = {
    rangeTaxation?: boolean
    typeRange?: boolean
  }

  export type RangeCountOutputTypeGetPayload<S extends boolean | null | undefined | RangeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RangeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RangeCountOutputTypeArgs)
    ? RangeCountOutputType 
    : S extends { select: any } & (RangeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RangeCountOutputType ? RangeCountOutputType[P] : never
  } 
      : RangeCountOutputType




  // Custom InputTypes

  /**
   * RangeCountOutputType without action
   */
  export type RangeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RangeCountOutputType
     */
    select?: RangeCountOutputTypeSelect | null
  }



  /**
   * Count Type TypeCountOutputType
   */


  export type TypeCountOutputType = {
    typeRange: number
  }

  export type TypeCountOutputTypeSelect = {
    typeRange?: boolean
  }

  export type TypeCountOutputTypeGetPayload<S extends boolean | null | undefined | TypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TypeCountOutputTypeArgs)
    ? TypeCountOutputType 
    : S extends { select: any } & (TypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TypeCountOutputType ? TypeCountOutputType[P] : never
  } 
      : TypeCountOutputType




  // Custom InputTypes

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Dinosaur
   */


  export type AggregateDinosaur = {
    _count: DinosaurCountAggregateOutputType | null
    _avg: DinosaurAvgAggregateOutputType | null
    _sum: DinosaurSumAggregateOutputType | null
    _min: DinosaurMinAggregateOutputType | null
    _max: DinosaurMaxAggregateOutputType | null
  }

  export type DinosaurAvgAggregateOutputType = {
    id: number | null
  }

  export type DinosaurSumAggregateOutputType = {
    id: number | null
  }

  export type DinosaurMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type DinosaurMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type DinosaurCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type DinosaurAvgAggregateInputType = {
    id?: true
  }

  export type DinosaurSumAggregateInputType = {
    id?: true
  }

  export type DinosaurMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DinosaurMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type DinosaurCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type DinosaurAggregateArgs = {
    /**
     * Filter which Dinosaur to aggregate.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: Enumerable<DinosaurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dinosaurs
    **/
    _count?: true | DinosaurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DinosaurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DinosaurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DinosaurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DinosaurMaxAggregateInputType
  }

  export type GetDinosaurAggregateType<T extends DinosaurAggregateArgs> = {
        [P in keyof T & keyof AggregateDinosaur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDinosaur[P]>
      : GetScalarType<T[P], AggregateDinosaur[P]>
  }




  export type DinosaurGroupByArgs = {
    where?: DinosaurWhereInput
    orderBy?: Enumerable<DinosaurOrderByWithAggregationInput>
    by: DinosaurScalarFieldEnum[]
    having?: DinosaurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DinosaurCountAggregateInputType | true
    _avg?: DinosaurAvgAggregateInputType
    _sum?: DinosaurSumAggregateInputType
    _min?: DinosaurMinAggregateInputType
    _max?: DinosaurMaxAggregateInputType
  }


  export type DinosaurGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: DinosaurCountAggregateOutputType | null
    _avg: DinosaurAvgAggregateOutputType | null
    _sum: DinosaurSumAggregateOutputType | null
    _min: DinosaurMinAggregateOutputType | null
    _max: DinosaurMaxAggregateOutputType | null
  }

  type GetDinosaurGroupByPayload<T extends DinosaurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DinosaurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DinosaurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DinosaurGroupByOutputType[P]>
            : GetScalarType<T[P], DinosaurGroupByOutputType[P]>
        }
      >
    >


  export type DinosaurSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
  }


  export type DinosaurGetPayload<S extends boolean | null | undefined | DinosaurArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Dinosaur :
    S extends undefined ? never :
    S extends { include: any } & (DinosaurArgs | DinosaurFindManyArgs)
    ? Dinosaur 
    : S extends { select: any } & (DinosaurArgs | DinosaurFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Dinosaur ? Dinosaur[P] : never
  } 
      : Dinosaur


  type DinosaurCountArgs = 
    Omit<DinosaurFindManyArgs, 'select' | 'include'> & {
      select?: DinosaurCountAggregateInputType | true
    }

  export interface DinosaurDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Dinosaur that matches the filter.
     * @param {DinosaurFindUniqueArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DinosaurFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DinosaurFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dinosaur'> extends True ? Prisma__DinosaurClient<DinosaurGetPayload<T>> : Prisma__DinosaurClient<DinosaurGetPayload<T> | null, null>

    /**
     * Find one Dinosaur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DinosaurFindUniqueOrThrowArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DinosaurFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DinosaurFindUniqueOrThrowArgs>
    ): Prisma__DinosaurClient<DinosaurGetPayload<T>>

    /**
     * Find the first Dinosaur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurFindFirstArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DinosaurFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DinosaurFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dinosaur'> extends True ? Prisma__DinosaurClient<DinosaurGetPayload<T>> : Prisma__DinosaurClient<DinosaurGetPayload<T> | null, null>

    /**
     * Find the first Dinosaur that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurFindFirstOrThrowArgs} args - Arguments to find a Dinosaur
     * @example
     * // Get one Dinosaur
     * const dinosaur = await prisma.dinosaur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DinosaurFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DinosaurFindFirstOrThrowArgs>
    ): Prisma__DinosaurClient<DinosaurGetPayload<T>>

    /**
     * Find zero or more Dinosaurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dinosaurs
     * const dinosaurs = await prisma.dinosaur.findMany()
     * 
     * // Get first 10 Dinosaurs
     * const dinosaurs = await prisma.dinosaur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dinosaurWithIdOnly = await prisma.dinosaur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DinosaurFindManyArgs>(
      args?: SelectSubset<T, DinosaurFindManyArgs>
    ): Prisma.PrismaPromise<Array<DinosaurGetPayload<T>>>

    /**
     * Create a Dinosaur.
     * @param {DinosaurCreateArgs} args - Arguments to create a Dinosaur.
     * @example
     * // Create one Dinosaur
     * const Dinosaur = await prisma.dinosaur.create({
     *   data: {
     *     // ... data to create a Dinosaur
     *   }
     * })
     * 
    **/
    create<T extends DinosaurCreateArgs>(
      args: SelectSubset<T, DinosaurCreateArgs>
    ): Prisma__DinosaurClient<DinosaurGetPayload<T>>

    /**
     * Create many Dinosaurs.
     *     @param {DinosaurCreateManyArgs} args - Arguments to create many Dinosaurs.
     *     @example
     *     // Create many Dinosaurs
     *     const dinosaur = await prisma.dinosaur.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DinosaurCreateManyArgs>(
      args?: SelectSubset<T, DinosaurCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dinosaur.
     * @param {DinosaurDeleteArgs} args - Arguments to delete one Dinosaur.
     * @example
     * // Delete one Dinosaur
     * const Dinosaur = await prisma.dinosaur.delete({
     *   where: {
     *     // ... filter to delete one Dinosaur
     *   }
     * })
     * 
    **/
    delete<T extends DinosaurDeleteArgs>(
      args: SelectSubset<T, DinosaurDeleteArgs>
    ): Prisma__DinosaurClient<DinosaurGetPayload<T>>

    /**
     * Update one Dinosaur.
     * @param {DinosaurUpdateArgs} args - Arguments to update one Dinosaur.
     * @example
     * // Update one Dinosaur
     * const dinosaur = await prisma.dinosaur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DinosaurUpdateArgs>(
      args: SelectSubset<T, DinosaurUpdateArgs>
    ): Prisma__DinosaurClient<DinosaurGetPayload<T>>

    /**
     * Delete zero or more Dinosaurs.
     * @param {DinosaurDeleteManyArgs} args - Arguments to filter Dinosaurs to delete.
     * @example
     * // Delete a few Dinosaurs
     * const { count } = await prisma.dinosaur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DinosaurDeleteManyArgs>(
      args?: SelectSubset<T, DinosaurDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dinosaurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dinosaurs
     * const dinosaur = await prisma.dinosaur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DinosaurUpdateManyArgs>(
      args: SelectSubset<T, DinosaurUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dinosaur.
     * @param {DinosaurUpsertArgs} args - Arguments to update or create a Dinosaur.
     * @example
     * // Update or create a Dinosaur
     * const dinosaur = await prisma.dinosaur.upsert({
     *   create: {
     *     // ... data to create a Dinosaur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dinosaur we want to update
     *   }
     * })
    **/
    upsert<T extends DinosaurUpsertArgs>(
      args: SelectSubset<T, DinosaurUpsertArgs>
    ): Prisma__DinosaurClient<DinosaurGetPayload<T>>

    /**
     * Count the number of Dinosaurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurCountArgs} args - Arguments to filter Dinosaurs to count.
     * @example
     * // Count the number of Dinosaurs
     * const count = await prisma.dinosaur.count({
     *   where: {
     *     // ... the filter for the Dinosaurs we want to count
     *   }
     * })
    **/
    count<T extends DinosaurCountArgs>(
      args?: Subset<T, DinosaurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DinosaurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dinosaur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DinosaurAggregateArgs>(args: Subset<T, DinosaurAggregateArgs>): Prisma.PrismaPromise<GetDinosaurAggregateType<T>>

    /**
     * Group by Dinosaur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DinosaurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DinosaurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DinosaurGroupByArgs['orderBy'] }
        : { orderBy?: DinosaurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DinosaurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDinosaurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Dinosaur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DinosaurClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Dinosaur base type for findUnique actions
   */
  export type DinosaurFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where: DinosaurWhereUniqueInput
  }

  /**
   * Dinosaur findUnique
   */
  export interface DinosaurFindUniqueArgs extends DinosaurFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dinosaur findUniqueOrThrow
   */
  export type DinosaurFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur base type for findFirst actions
   */
  export type DinosaurFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: Enumerable<DinosaurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dinosaurs.
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dinosaurs.
     */
    distinct?: Enumerable<DinosaurScalarFieldEnum>
  }

  /**
   * Dinosaur findFirst
   */
  export interface DinosaurFindFirstArgs extends DinosaurFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dinosaur findFirstOrThrow
   */
  export type DinosaurFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * Filter, which Dinosaur to fetch.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: Enumerable<DinosaurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dinosaurs.
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dinosaurs.
     */
    distinct?: Enumerable<DinosaurScalarFieldEnum>
  }


  /**
   * Dinosaur findMany
   */
  export type DinosaurFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * Filter, which Dinosaurs to fetch.
     */
    where?: DinosaurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dinosaurs to fetch.
     */
    orderBy?: Enumerable<DinosaurOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dinosaurs.
     */
    cursor?: DinosaurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dinosaurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dinosaurs.
     */
    skip?: number
    distinct?: Enumerable<DinosaurScalarFieldEnum>
  }


  /**
   * Dinosaur create
   */
  export type DinosaurCreateArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * The data needed to create a Dinosaur.
     */
    data: XOR<DinosaurCreateInput, DinosaurUncheckedCreateInput>
  }


  /**
   * Dinosaur createMany
   */
  export type DinosaurCreateManyArgs = {
    /**
     * The data used to create many Dinosaurs.
     */
    data: Enumerable<DinosaurCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dinosaur update
   */
  export type DinosaurUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * The data needed to update a Dinosaur.
     */
    data: XOR<DinosaurUpdateInput, DinosaurUncheckedUpdateInput>
    /**
     * Choose, which Dinosaur to update.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur updateMany
   */
  export type DinosaurUpdateManyArgs = {
    /**
     * The data used to update Dinosaurs.
     */
    data: XOR<DinosaurUpdateManyMutationInput, DinosaurUncheckedUpdateManyInput>
    /**
     * Filter which Dinosaurs to update
     */
    where?: DinosaurWhereInput
  }


  /**
   * Dinosaur upsert
   */
  export type DinosaurUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * The filter to search for the Dinosaur to update in case it exists.
     */
    where: DinosaurWhereUniqueInput
    /**
     * In case the Dinosaur found by the `where` argument doesn't exist, create a new Dinosaur with this data.
     */
    create: XOR<DinosaurCreateInput, DinosaurUncheckedCreateInput>
    /**
     * In case the Dinosaur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DinosaurUpdateInput, DinosaurUncheckedUpdateInput>
  }


  /**
   * Dinosaur delete
   */
  export type DinosaurDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
    /**
     * Filter which Dinosaur to delete.
     */
    where: DinosaurWhereUniqueInput
  }


  /**
   * Dinosaur deleteMany
   */
  export type DinosaurDeleteManyArgs = {
    /**
     * Filter which Dinosaurs to delete
     */
    where?: DinosaurWhereInput
  }


  /**
   * Dinosaur without action
   */
  export type DinosaurArgs = {
    /**
     * Select specific fields to fetch from the Dinosaur
     */
    select?: DinosaurSelect | null
  }



  /**
   * Model taxation
   */


  export type AggregateTaxation = {
    _count: TaxationCountAggregateOutputType | null
    _avg: TaxationAvgAggregateOutputType | null
    _sum: TaxationSumAggregateOutputType | null
    _min: TaxationMinAggregateOutputType | null
    _max: TaxationMaxAggregateOutputType | null
  }

  export type TaxationAvgAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type TaxationSumAggregateOutputType = {
    id: number | null
    value: number | null
  }

  export type TaxationMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    isPercentage: boolean | null
    isDividedOneHundred: boolean | null
  }

  export type TaxationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: number | null
    isPercentage: boolean | null
    isDividedOneHundred: boolean | null
  }

  export type TaxationCountAggregateOutputType = {
    id: number
    name: number
    value: number
    isPercentage: number
    isDividedOneHundred: number
    _all: number
  }


  export type TaxationAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type TaxationSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type TaxationMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isPercentage?: true
    isDividedOneHundred?: true
  }

  export type TaxationMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isPercentage?: true
    isDividedOneHundred?: true
  }

  export type TaxationCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isPercentage?: true
    isDividedOneHundred?: true
    _all?: true
  }

  export type TaxationAggregateArgs = {
    /**
     * Filter which taxation to aggregate.
     */
    where?: taxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxations to fetch.
     */
    orderBy?: Enumerable<taxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: taxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned taxations
    **/
    _count?: true | TaxationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaxationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaxationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaxationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaxationMaxAggregateInputType
  }

  export type GetTaxationAggregateType<T extends TaxationAggregateArgs> = {
        [P in keyof T & keyof AggregateTaxation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaxation[P]>
      : GetScalarType<T[P], AggregateTaxation[P]>
  }




  export type TaxationGroupByArgs = {
    where?: taxationWhereInput
    orderBy?: Enumerable<taxationOrderByWithAggregationInput>
    by: TaxationScalarFieldEnum[]
    having?: taxationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaxationCountAggregateInputType | true
    _avg?: TaxationAvgAggregateInputType
    _sum?: TaxationSumAggregateInputType
    _min?: TaxationMinAggregateInputType
    _max?: TaxationMaxAggregateInputType
  }


  export type TaxationGroupByOutputType = {
    id: number
    name: string
    value: number
    isPercentage: boolean
    isDividedOneHundred: boolean
    _count: TaxationCountAggregateOutputType | null
    _avg: TaxationAvgAggregateOutputType | null
    _sum: TaxationSumAggregateOutputType | null
    _min: TaxationMinAggregateOutputType | null
    _max: TaxationMaxAggregateOutputType | null
  }

  type GetTaxationGroupByPayload<T extends TaxationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TaxationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaxationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaxationGroupByOutputType[P]>
            : GetScalarType<T[P], TaxationGroupByOutputType[P]>
        }
      >
    >


  export type taxationSelect = {
    id?: boolean
    name?: boolean
    value?: boolean
    isPercentage?: boolean
    isDividedOneHundred?: boolean
    rangeTaxation?: boolean | taxation$rangeTaxationArgs
    _count?: boolean | TaxationCountOutputTypeArgs
  }


  export type taxationInclude = {
    rangeTaxation?: boolean | taxation$rangeTaxationArgs
    _count?: boolean | TaxationCountOutputTypeArgs
  }

  export type taxationGetPayload<S extends boolean | null | undefined | taxationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? taxation :
    S extends undefined ? never :
    S extends { include: any } & (taxationArgs | taxationFindManyArgs)
    ? taxation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'rangeTaxation' ? Array < rangeTaxationGetPayload<S['include'][P]>>  :
        P extends '_count' ? TaxationCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (taxationArgs | taxationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'rangeTaxation' ? Array < rangeTaxationGetPayload<S['select'][P]>>  :
        P extends '_count' ? TaxationCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof taxation ? taxation[P] : never
  } 
      : taxation


  type taxationCountArgs = 
    Omit<taxationFindManyArgs, 'select' | 'include'> & {
      select?: TaxationCountAggregateInputType | true
    }

  export interface taxationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Taxation that matches the filter.
     * @param {taxationFindUniqueArgs} args - Arguments to find a Taxation
     * @example
     * // Get one Taxation
     * const taxation = await prisma.taxation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends taxationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, taxationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'taxation'> extends True ? Prisma__taxationClient<taxationGetPayload<T>> : Prisma__taxationClient<taxationGetPayload<T> | null, null>

    /**
     * Find one Taxation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {taxationFindUniqueOrThrowArgs} args - Arguments to find a Taxation
     * @example
     * // Get one Taxation
     * const taxation = await prisma.taxation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends taxationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, taxationFindUniqueOrThrowArgs>
    ): Prisma__taxationClient<taxationGetPayload<T>>

    /**
     * Find the first Taxation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxationFindFirstArgs} args - Arguments to find a Taxation
     * @example
     * // Get one Taxation
     * const taxation = await prisma.taxation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends taxationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, taxationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'taxation'> extends True ? Prisma__taxationClient<taxationGetPayload<T>> : Prisma__taxationClient<taxationGetPayload<T> | null, null>

    /**
     * Find the first Taxation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxationFindFirstOrThrowArgs} args - Arguments to find a Taxation
     * @example
     * // Get one Taxation
     * const taxation = await prisma.taxation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends taxationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, taxationFindFirstOrThrowArgs>
    ): Prisma__taxationClient<taxationGetPayload<T>>

    /**
     * Find zero or more Taxations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Taxations
     * const taxations = await prisma.taxation.findMany()
     * 
     * // Get first 10 Taxations
     * const taxations = await prisma.taxation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taxationWithIdOnly = await prisma.taxation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends taxationFindManyArgs>(
      args?: SelectSubset<T, taxationFindManyArgs>
    ): Prisma.PrismaPromise<Array<taxationGetPayload<T>>>

    /**
     * Create a Taxation.
     * @param {taxationCreateArgs} args - Arguments to create a Taxation.
     * @example
     * // Create one Taxation
     * const Taxation = await prisma.taxation.create({
     *   data: {
     *     // ... data to create a Taxation
     *   }
     * })
     * 
    **/
    create<T extends taxationCreateArgs>(
      args: SelectSubset<T, taxationCreateArgs>
    ): Prisma__taxationClient<taxationGetPayload<T>>

    /**
     * Create many Taxations.
     *     @param {taxationCreateManyArgs} args - Arguments to create many Taxations.
     *     @example
     *     // Create many Taxations
     *     const taxation = await prisma.taxation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends taxationCreateManyArgs>(
      args?: SelectSubset<T, taxationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Taxation.
     * @param {taxationDeleteArgs} args - Arguments to delete one Taxation.
     * @example
     * // Delete one Taxation
     * const Taxation = await prisma.taxation.delete({
     *   where: {
     *     // ... filter to delete one Taxation
     *   }
     * })
     * 
    **/
    delete<T extends taxationDeleteArgs>(
      args: SelectSubset<T, taxationDeleteArgs>
    ): Prisma__taxationClient<taxationGetPayload<T>>

    /**
     * Update one Taxation.
     * @param {taxationUpdateArgs} args - Arguments to update one Taxation.
     * @example
     * // Update one Taxation
     * const taxation = await prisma.taxation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends taxationUpdateArgs>(
      args: SelectSubset<T, taxationUpdateArgs>
    ): Prisma__taxationClient<taxationGetPayload<T>>

    /**
     * Delete zero or more Taxations.
     * @param {taxationDeleteManyArgs} args - Arguments to filter Taxations to delete.
     * @example
     * // Delete a few Taxations
     * const { count } = await prisma.taxation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends taxationDeleteManyArgs>(
      args?: SelectSubset<T, taxationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Taxations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Taxations
     * const taxation = await prisma.taxation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends taxationUpdateManyArgs>(
      args: SelectSubset<T, taxationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Taxation.
     * @param {taxationUpsertArgs} args - Arguments to update or create a Taxation.
     * @example
     * // Update or create a Taxation
     * const taxation = await prisma.taxation.upsert({
     *   create: {
     *     // ... data to create a Taxation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taxation we want to update
     *   }
     * })
    **/
    upsert<T extends taxationUpsertArgs>(
      args: SelectSubset<T, taxationUpsertArgs>
    ): Prisma__taxationClient<taxationGetPayload<T>>

    /**
     * Count the number of Taxations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taxationCountArgs} args - Arguments to filter Taxations to count.
     * @example
     * // Count the number of Taxations
     * const count = await prisma.taxation.count({
     *   where: {
     *     // ... the filter for the Taxations we want to count
     *   }
     * })
    **/
    count<T extends taxationCountArgs>(
      args?: Subset<T, taxationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaxationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taxation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaxationAggregateArgs>(args: Subset<T, TaxationAggregateArgs>): Prisma.PrismaPromise<GetTaxationAggregateType<T>>

    /**
     * Group by Taxation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaxationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaxationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaxationGroupByArgs['orderBy'] }
        : { orderBy?: TaxationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaxationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaxationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for taxation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__taxationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    rangeTaxation<T extends taxation$rangeTaxationArgs= {}>(args?: Subset<T, taxation$rangeTaxationArgs>): Prisma.PrismaPromise<Array<rangeTaxationGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * taxation base type for findUnique actions
   */
  export type taxationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * Filter, which taxation to fetch.
     */
    where: taxationWhereUniqueInput
  }

  /**
   * taxation findUnique
   */
  export interface taxationFindUniqueArgs extends taxationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * taxation findUniqueOrThrow
   */
  export type taxationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * Filter, which taxation to fetch.
     */
    where: taxationWhereUniqueInput
  }


  /**
   * taxation base type for findFirst actions
   */
  export type taxationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * Filter, which taxation to fetch.
     */
    where?: taxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxations to fetch.
     */
    orderBy?: Enumerable<taxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxations.
     */
    cursor?: taxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxations.
     */
    distinct?: Enumerable<TaxationScalarFieldEnum>
  }

  /**
   * taxation findFirst
   */
  export interface taxationFindFirstArgs extends taxationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * taxation findFirstOrThrow
   */
  export type taxationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * Filter, which taxation to fetch.
     */
    where?: taxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxations to fetch.
     */
    orderBy?: Enumerable<taxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for taxations.
     */
    cursor?: taxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of taxations.
     */
    distinct?: Enumerable<TaxationScalarFieldEnum>
  }


  /**
   * taxation findMany
   */
  export type taxationFindManyArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * Filter, which taxations to fetch.
     */
    where?: taxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of taxations to fetch.
     */
    orderBy?: Enumerable<taxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing taxations.
     */
    cursor?: taxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` taxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` taxations.
     */
    skip?: number
    distinct?: Enumerable<TaxationScalarFieldEnum>
  }


  /**
   * taxation create
   */
  export type taxationCreateArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * The data needed to create a taxation.
     */
    data: XOR<taxationCreateInput, taxationUncheckedCreateInput>
  }


  /**
   * taxation createMany
   */
  export type taxationCreateManyArgs = {
    /**
     * The data used to create many taxations.
     */
    data: Enumerable<taxationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * taxation update
   */
  export type taxationUpdateArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * The data needed to update a taxation.
     */
    data: XOR<taxationUpdateInput, taxationUncheckedUpdateInput>
    /**
     * Choose, which taxation to update.
     */
    where: taxationWhereUniqueInput
  }


  /**
   * taxation updateMany
   */
  export type taxationUpdateManyArgs = {
    /**
     * The data used to update taxations.
     */
    data: XOR<taxationUpdateManyMutationInput, taxationUncheckedUpdateManyInput>
    /**
     * Filter which taxations to update
     */
    where?: taxationWhereInput
  }


  /**
   * taxation upsert
   */
  export type taxationUpsertArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * The filter to search for the taxation to update in case it exists.
     */
    where: taxationWhereUniqueInput
    /**
     * In case the taxation found by the `where` argument doesn't exist, create a new taxation with this data.
     */
    create: XOR<taxationCreateInput, taxationUncheckedCreateInput>
    /**
     * In case the taxation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taxationUpdateInput, taxationUncheckedUpdateInput>
  }


  /**
   * taxation delete
   */
  export type taxationDeleteArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
    /**
     * Filter which taxation to delete.
     */
    where: taxationWhereUniqueInput
  }


  /**
   * taxation deleteMany
   */
  export type taxationDeleteManyArgs = {
    /**
     * Filter which taxations to delete
     */
    where?: taxationWhereInput
  }


  /**
   * taxation.rangeTaxation
   */
  export type taxation$rangeTaxationArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    where?: rangeTaxationWhereInput
    orderBy?: Enumerable<rangeTaxationOrderByWithRelationInput>
    cursor?: rangeTaxationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RangeTaxationScalarFieldEnum>
  }


  /**
   * taxation without action
   */
  export type taxationArgs = {
    /**
     * Select specific fields to fetch from the taxation
     */
    select?: taxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taxationInclude | null
  }



  /**
   * Model range
   */


  export type AggregateRange = {
    _count: RangeCountAggregateOutputType | null
    _avg: RangeAvgAggregateOutputType | null
    _sum: RangeSumAggregateOutputType | null
    _min: RangeMinAggregateOutputType | null
    _max: RangeMaxAggregateOutputType | null
  }

  export type RangeAvgAggregateOutputType = {
    id: number | null
  }

  export type RangeSumAggregateOutputType = {
    id: number | null
  }

  export type RangeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RangeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RangeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RangeAvgAggregateInputType = {
    id?: true
  }

  export type RangeSumAggregateInputType = {
    id?: true
  }

  export type RangeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RangeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RangeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RangeAggregateArgs = {
    /**
     * Filter which range to aggregate.
     */
    where?: rangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranges to fetch.
     */
    orderBy?: Enumerable<rangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ranges
    **/
    _count?: true | RangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RangeMaxAggregateInputType
  }

  export type GetRangeAggregateType<T extends RangeAggregateArgs> = {
        [P in keyof T & keyof AggregateRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRange[P]>
      : GetScalarType<T[P], AggregateRange[P]>
  }




  export type RangeGroupByArgs = {
    where?: rangeWhereInput
    orderBy?: Enumerable<rangeOrderByWithAggregationInput>
    by: RangeScalarFieldEnum[]
    having?: rangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RangeCountAggregateInputType | true
    _avg?: RangeAvgAggregateInputType
    _sum?: RangeSumAggregateInputType
    _min?: RangeMinAggregateInputType
    _max?: RangeMaxAggregateInputType
  }


  export type RangeGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: RangeCountAggregateOutputType | null
    _avg: RangeAvgAggregateOutputType | null
    _sum: RangeSumAggregateOutputType | null
    _min: RangeMinAggregateOutputType | null
    _max: RangeMaxAggregateOutputType | null
  }

  type GetRangeGroupByPayload<T extends RangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RangeGroupByOutputType[P]>
            : GetScalarType<T[P], RangeGroupByOutputType[P]>
        }
      >
    >


  export type rangeSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    rangeTaxation?: boolean | range$rangeTaxationArgs
    typeRange?: boolean | range$typeRangeArgs
    _count?: boolean | RangeCountOutputTypeArgs
  }


  export type rangeInclude = {
    rangeTaxation?: boolean | range$rangeTaxationArgs
    typeRange?: boolean | range$typeRangeArgs
    _count?: boolean | RangeCountOutputTypeArgs
  }

  export type rangeGetPayload<S extends boolean | null | undefined | rangeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? range :
    S extends undefined ? never :
    S extends { include: any } & (rangeArgs | rangeFindManyArgs)
    ? range  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'rangeTaxation' ? Array < rangeTaxationGetPayload<S['include'][P]>>  :
        P extends 'typeRange' ? Array < typeRangeGetPayload<S['include'][P]>>  :
        P extends '_count' ? RangeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (rangeArgs | rangeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'rangeTaxation' ? Array < rangeTaxationGetPayload<S['select'][P]>>  :
        P extends 'typeRange' ? Array < typeRangeGetPayload<S['select'][P]>>  :
        P extends '_count' ? RangeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof range ? range[P] : never
  } 
      : range


  type rangeCountArgs = 
    Omit<rangeFindManyArgs, 'select' | 'include'> & {
      select?: RangeCountAggregateInputType | true
    }

  export interface rangeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Range that matches the filter.
     * @param {rangeFindUniqueArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rangeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, rangeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'range'> extends True ? Prisma__rangeClient<rangeGetPayload<T>> : Prisma__rangeClient<rangeGetPayload<T> | null, null>

    /**
     * Find one Range that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rangeFindUniqueOrThrowArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rangeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, rangeFindUniqueOrThrowArgs>
    ): Prisma__rangeClient<rangeGetPayload<T>>

    /**
     * Find the first Range that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeFindFirstArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rangeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, rangeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'range'> extends True ? Prisma__rangeClient<rangeGetPayload<T>> : Prisma__rangeClient<rangeGetPayload<T> | null, null>

    /**
     * Find the first Range that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeFindFirstOrThrowArgs} args - Arguments to find a Range
     * @example
     * // Get one Range
     * const range = await prisma.range.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rangeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, rangeFindFirstOrThrowArgs>
    ): Prisma__rangeClient<rangeGetPayload<T>>

    /**
     * Find zero or more Ranges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ranges
     * const ranges = await prisma.range.findMany()
     * 
     * // Get first 10 Ranges
     * const ranges = await prisma.range.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rangeWithIdOnly = await prisma.range.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rangeFindManyArgs>(
      args?: SelectSubset<T, rangeFindManyArgs>
    ): Prisma.PrismaPromise<Array<rangeGetPayload<T>>>

    /**
     * Create a Range.
     * @param {rangeCreateArgs} args - Arguments to create a Range.
     * @example
     * // Create one Range
     * const Range = await prisma.range.create({
     *   data: {
     *     // ... data to create a Range
     *   }
     * })
     * 
    **/
    create<T extends rangeCreateArgs>(
      args: SelectSubset<T, rangeCreateArgs>
    ): Prisma__rangeClient<rangeGetPayload<T>>

    /**
     * Create many Ranges.
     *     @param {rangeCreateManyArgs} args - Arguments to create many Ranges.
     *     @example
     *     // Create many Ranges
     *     const range = await prisma.range.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rangeCreateManyArgs>(
      args?: SelectSubset<T, rangeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Range.
     * @param {rangeDeleteArgs} args - Arguments to delete one Range.
     * @example
     * // Delete one Range
     * const Range = await prisma.range.delete({
     *   where: {
     *     // ... filter to delete one Range
     *   }
     * })
     * 
    **/
    delete<T extends rangeDeleteArgs>(
      args: SelectSubset<T, rangeDeleteArgs>
    ): Prisma__rangeClient<rangeGetPayload<T>>

    /**
     * Update one Range.
     * @param {rangeUpdateArgs} args - Arguments to update one Range.
     * @example
     * // Update one Range
     * const range = await prisma.range.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rangeUpdateArgs>(
      args: SelectSubset<T, rangeUpdateArgs>
    ): Prisma__rangeClient<rangeGetPayload<T>>

    /**
     * Delete zero or more Ranges.
     * @param {rangeDeleteManyArgs} args - Arguments to filter Ranges to delete.
     * @example
     * // Delete a few Ranges
     * const { count } = await prisma.range.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rangeDeleteManyArgs>(
      args?: SelectSubset<T, rangeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ranges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ranges
     * const range = await prisma.range.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rangeUpdateManyArgs>(
      args: SelectSubset<T, rangeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Range.
     * @param {rangeUpsertArgs} args - Arguments to update or create a Range.
     * @example
     * // Update or create a Range
     * const range = await prisma.range.upsert({
     *   create: {
     *     // ... data to create a Range
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Range we want to update
     *   }
     * })
    **/
    upsert<T extends rangeUpsertArgs>(
      args: SelectSubset<T, rangeUpsertArgs>
    ): Prisma__rangeClient<rangeGetPayload<T>>

    /**
     * Count the number of Ranges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeCountArgs} args - Arguments to filter Ranges to count.
     * @example
     * // Count the number of Ranges
     * const count = await prisma.range.count({
     *   where: {
     *     // ... the filter for the Ranges we want to count
     *   }
     * })
    **/
    count<T extends rangeCountArgs>(
      args?: Subset<T, rangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Range.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RangeAggregateArgs>(args: Subset<T, RangeAggregateArgs>): Prisma.PrismaPromise<GetRangeAggregateType<T>>

    /**
     * Group by Range.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RangeGroupByArgs['orderBy'] }
        : { orderBy?: RangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for range.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__rangeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    rangeTaxation<T extends range$rangeTaxationArgs= {}>(args?: Subset<T, range$rangeTaxationArgs>): Prisma.PrismaPromise<Array<rangeTaxationGetPayload<T>>| Null>;

    typeRange<T extends range$typeRangeArgs= {}>(args?: Subset<T, range$typeRangeArgs>): Prisma.PrismaPromise<Array<typeRangeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * range base type for findUnique actions
   */
  export type rangeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * Filter, which range to fetch.
     */
    where: rangeWhereUniqueInput
  }

  /**
   * range findUnique
   */
  export interface rangeFindUniqueArgs extends rangeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * range findUniqueOrThrow
   */
  export type rangeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * Filter, which range to fetch.
     */
    where: rangeWhereUniqueInput
  }


  /**
   * range base type for findFirst actions
   */
  export type rangeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * Filter, which range to fetch.
     */
    where?: rangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranges to fetch.
     */
    orderBy?: Enumerable<rangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ranges.
     */
    cursor?: rangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ranges.
     */
    distinct?: Enumerable<RangeScalarFieldEnum>
  }

  /**
   * range findFirst
   */
  export interface rangeFindFirstArgs extends rangeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * range findFirstOrThrow
   */
  export type rangeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * Filter, which range to fetch.
     */
    where?: rangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranges to fetch.
     */
    orderBy?: Enumerable<rangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ranges.
     */
    cursor?: rangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ranges.
     */
    distinct?: Enumerable<RangeScalarFieldEnum>
  }


  /**
   * range findMany
   */
  export type rangeFindManyArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * Filter, which ranges to fetch.
     */
    where?: rangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ranges to fetch.
     */
    orderBy?: Enumerable<rangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ranges.
     */
    cursor?: rangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ranges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ranges.
     */
    skip?: number
    distinct?: Enumerable<RangeScalarFieldEnum>
  }


  /**
   * range create
   */
  export type rangeCreateArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * The data needed to create a range.
     */
    data: XOR<rangeCreateInput, rangeUncheckedCreateInput>
  }


  /**
   * range createMany
   */
  export type rangeCreateManyArgs = {
    /**
     * The data used to create many ranges.
     */
    data: Enumerable<rangeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * range update
   */
  export type rangeUpdateArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * The data needed to update a range.
     */
    data: XOR<rangeUpdateInput, rangeUncheckedUpdateInput>
    /**
     * Choose, which range to update.
     */
    where: rangeWhereUniqueInput
  }


  /**
   * range updateMany
   */
  export type rangeUpdateManyArgs = {
    /**
     * The data used to update ranges.
     */
    data: XOR<rangeUpdateManyMutationInput, rangeUncheckedUpdateManyInput>
    /**
     * Filter which ranges to update
     */
    where?: rangeWhereInput
  }


  /**
   * range upsert
   */
  export type rangeUpsertArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * The filter to search for the range to update in case it exists.
     */
    where: rangeWhereUniqueInput
    /**
     * In case the range found by the `where` argument doesn't exist, create a new range with this data.
     */
    create: XOR<rangeCreateInput, rangeUncheckedCreateInput>
    /**
     * In case the range was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rangeUpdateInput, rangeUncheckedUpdateInput>
  }


  /**
   * range delete
   */
  export type rangeDeleteArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
    /**
     * Filter which range to delete.
     */
    where: rangeWhereUniqueInput
  }


  /**
   * range deleteMany
   */
  export type rangeDeleteManyArgs = {
    /**
     * Filter which ranges to delete
     */
    where?: rangeWhereInput
  }


  /**
   * range.rangeTaxation
   */
  export type range$rangeTaxationArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    where?: rangeTaxationWhereInput
    orderBy?: Enumerable<rangeTaxationOrderByWithRelationInput>
    cursor?: rangeTaxationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RangeTaxationScalarFieldEnum>
  }


  /**
   * range.typeRange
   */
  export type range$typeRangeArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    where?: typeRangeWhereInput
    orderBy?: Enumerable<typeRangeOrderByWithRelationInput>
    cursor?: typeRangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TypeRangeScalarFieldEnum>
  }


  /**
   * range without action
   */
  export type rangeArgs = {
    /**
     * Select specific fields to fetch from the range
     */
    select?: rangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeInclude | null
  }



  /**
   * Model type
   */


  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type TypeAggregateArgs = {
    /**
     * Filter which type to aggregate.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: Enumerable<typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs = {
    where?: typeWhereInput
    orderBy?: Enumerable<typeOrderByWithAggregationInput>
    by: TypeScalarFieldEnum[]
    having?: typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }


  export type TypeGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type typeSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    typeRange?: boolean | type$typeRangeArgs
    _count?: boolean | TypeCountOutputTypeArgs
  }


  export type typeInclude = {
    typeRange?: boolean | type$typeRangeArgs
    _count?: boolean | TypeCountOutputTypeArgs
  }

  export type typeGetPayload<S extends boolean | null | undefined | typeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? type :
    S extends undefined ? never :
    S extends { include: any } & (typeArgs | typeFindManyArgs)
    ? type  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'typeRange' ? Array < typeRangeGetPayload<S['include'][P]>>  :
        P extends '_count' ? TypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (typeArgs | typeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'typeRange' ? Array < typeRangeGetPayload<S['select'][P]>>  :
        P extends '_count' ? TypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof type ? type[P] : never
  } 
      : type


  type typeCountArgs = 
    Omit<typeFindManyArgs, 'select' | 'include'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface typeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Type that matches the filter.
     * @param {typeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends typeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, typeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'type'> extends True ? Prisma__typeClient<typeGetPayload<T>> : Prisma__typeClient<typeGetPayload<T> | null, null>

    /**
     * Find one Type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {typeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends typeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, typeFindUniqueOrThrowArgs>
    ): Prisma__typeClient<typeGetPayload<T>>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends typeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, typeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'type'> extends True ? Prisma__typeClient<typeGetPayload<T>> : Prisma__typeClient<typeGetPayload<T> | null, null>

    /**
     * Find the first Type that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends typeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, typeFindFirstOrThrowArgs>
    ): Prisma__typeClient<typeGetPayload<T>>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends typeFindManyArgs>(
      args?: SelectSubset<T, typeFindManyArgs>
    ): Prisma.PrismaPromise<Array<typeGetPayload<T>>>

    /**
     * Create a Type.
     * @param {typeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
    **/
    create<T extends typeCreateArgs>(
      args: SelectSubset<T, typeCreateArgs>
    ): Prisma__typeClient<typeGetPayload<T>>

    /**
     * Create many Types.
     *     @param {typeCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const type = await prisma.type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends typeCreateManyArgs>(
      args?: SelectSubset<T, typeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {typeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
    **/
    delete<T extends typeDeleteArgs>(
      args: SelectSubset<T, typeDeleteArgs>
    ): Prisma__typeClient<typeGetPayload<T>>

    /**
     * Update one Type.
     * @param {typeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends typeUpdateArgs>(
      args: SelectSubset<T, typeUpdateArgs>
    ): Prisma__typeClient<typeGetPayload<T>>

    /**
     * Delete zero or more Types.
     * @param {typeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends typeDeleteManyArgs>(
      args?: SelectSubset<T, typeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends typeUpdateManyArgs>(
      args: SelectSubset<T, typeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {typeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
    **/
    upsert<T extends typeUpsertArgs>(
      args: SelectSubset<T, typeUpsertArgs>
    ): Prisma__typeClient<typeGetPayload<T>>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends typeCountArgs>(
      args?: Subset<T, typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__typeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    typeRange<T extends type$typeRangeArgs= {}>(args?: Subset<T, type$typeRangeArgs>): Prisma.PrismaPromise<Array<typeRangeGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * type base type for findUnique actions
   */
  export type typeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * Filter, which type to fetch.
     */
    where: typeWhereUniqueInput
  }

  /**
   * type findUnique
   */
  export interface typeFindUniqueArgs extends typeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * type findUniqueOrThrow
   */
  export type typeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * Filter, which type to fetch.
     */
    where: typeWhereUniqueInput
  }


  /**
   * type base type for findFirst actions
   */
  export type typeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * Filter, which type to fetch.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: Enumerable<typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: Enumerable<TypeScalarFieldEnum>
  }

  /**
   * type findFirst
   */
  export interface typeFindFirstArgs extends typeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * type findFirstOrThrow
   */
  export type typeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * Filter, which type to fetch.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: Enumerable<typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: Enumerable<TypeScalarFieldEnum>
  }


  /**
   * type findMany
   */
  export type typeFindManyArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * Filter, which types to fetch.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: Enumerable<typeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing types.
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    distinct?: Enumerable<TypeScalarFieldEnum>
  }


  /**
   * type create
   */
  export type typeCreateArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * The data needed to create a type.
     */
    data: XOR<typeCreateInput, typeUncheckedCreateInput>
  }


  /**
   * type createMany
   */
  export type typeCreateManyArgs = {
    /**
     * The data used to create many types.
     */
    data: Enumerable<typeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * type update
   */
  export type typeUpdateArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * The data needed to update a type.
     */
    data: XOR<typeUpdateInput, typeUncheckedUpdateInput>
    /**
     * Choose, which type to update.
     */
    where: typeWhereUniqueInput
  }


  /**
   * type updateMany
   */
  export type typeUpdateManyArgs = {
    /**
     * The data used to update types.
     */
    data: XOR<typeUpdateManyMutationInput, typeUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typeWhereInput
  }


  /**
   * type upsert
   */
  export type typeUpsertArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * The filter to search for the type to update in case it exists.
     */
    where: typeWhereUniqueInput
    /**
     * In case the type found by the `where` argument doesn't exist, create a new type with this data.
     */
    create: XOR<typeCreateInput, typeUncheckedCreateInput>
    /**
     * In case the type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typeUpdateInput, typeUncheckedUpdateInput>
  }


  /**
   * type delete
   */
  export type typeDeleteArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
    /**
     * Filter which type to delete.
     */
    where: typeWhereUniqueInput
  }


  /**
   * type deleteMany
   */
  export type typeDeleteManyArgs = {
    /**
     * Filter which types to delete
     */
    where?: typeWhereInput
  }


  /**
   * type.typeRange
   */
  export type type$typeRangeArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    where?: typeRangeWhereInput
    orderBy?: Enumerable<typeRangeOrderByWithRelationInput>
    cursor?: typeRangeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TypeRangeScalarFieldEnum>
  }


  /**
   * type without action
   */
  export type typeArgs = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeInclude | null
  }



  /**
   * Model rangeTaxation
   */


  export type AggregateRangeTaxation = {
    _count: RangeTaxationCountAggregateOutputType | null
    _avg: RangeTaxationAvgAggregateOutputType | null
    _sum: RangeTaxationSumAggregateOutputType | null
    _min: RangeTaxationMinAggregateOutputType | null
    _max: RangeTaxationMaxAggregateOutputType | null
  }

  export type RangeTaxationAvgAggregateOutputType = {
    id: number | null
    rangeId: number | null
    taxationId: number | null
  }

  export type RangeTaxationSumAggregateOutputType = {
    id: number | null
    rangeId: number | null
    taxationId: number | null
  }

  export type RangeTaxationMinAggregateOutputType = {
    id: number | null
    rangeId: number | null
    taxationId: number | null
  }

  export type RangeTaxationMaxAggregateOutputType = {
    id: number | null
    rangeId: number | null
    taxationId: number | null
  }

  export type RangeTaxationCountAggregateOutputType = {
    id: number
    rangeId: number
    taxationId: number
    _all: number
  }


  export type RangeTaxationAvgAggregateInputType = {
    id?: true
    rangeId?: true
    taxationId?: true
  }

  export type RangeTaxationSumAggregateInputType = {
    id?: true
    rangeId?: true
    taxationId?: true
  }

  export type RangeTaxationMinAggregateInputType = {
    id?: true
    rangeId?: true
    taxationId?: true
  }

  export type RangeTaxationMaxAggregateInputType = {
    id?: true
    rangeId?: true
    taxationId?: true
  }

  export type RangeTaxationCountAggregateInputType = {
    id?: true
    rangeId?: true
    taxationId?: true
    _all?: true
  }

  export type RangeTaxationAggregateArgs = {
    /**
     * Filter which rangeTaxation to aggregate.
     */
    where?: rangeTaxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rangeTaxations to fetch.
     */
    orderBy?: Enumerable<rangeTaxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rangeTaxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rangeTaxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rangeTaxations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rangeTaxations
    **/
    _count?: true | RangeTaxationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RangeTaxationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RangeTaxationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RangeTaxationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RangeTaxationMaxAggregateInputType
  }

  export type GetRangeTaxationAggregateType<T extends RangeTaxationAggregateArgs> = {
        [P in keyof T & keyof AggregateRangeTaxation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRangeTaxation[P]>
      : GetScalarType<T[P], AggregateRangeTaxation[P]>
  }




  export type RangeTaxationGroupByArgs = {
    where?: rangeTaxationWhereInput
    orderBy?: Enumerable<rangeTaxationOrderByWithAggregationInput>
    by: RangeTaxationScalarFieldEnum[]
    having?: rangeTaxationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RangeTaxationCountAggregateInputType | true
    _avg?: RangeTaxationAvgAggregateInputType
    _sum?: RangeTaxationSumAggregateInputType
    _min?: RangeTaxationMinAggregateInputType
    _max?: RangeTaxationMaxAggregateInputType
  }


  export type RangeTaxationGroupByOutputType = {
    id: number
    rangeId: number
    taxationId: number
    _count: RangeTaxationCountAggregateOutputType | null
    _avg: RangeTaxationAvgAggregateOutputType | null
    _sum: RangeTaxationSumAggregateOutputType | null
    _min: RangeTaxationMinAggregateOutputType | null
    _max: RangeTaxationMaxAggregateOutputType | null
  }

  type GetRangeTaxationGroupByPayload<T extends RangeTaxationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RangeTaxationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RangeTaxationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RangeTaxationGroupByOutputType[P]>
            : GetScalarType<T[P], RangeTaxationGroupByOutputType[P]>
        }
      >
    >


  export type rangeTaxationSelect = {
    id?: boolean
    rangeId?: boolean
    taxationId?: boolean
    range?: boolean | rangeArgs
    taxation?: boolean | taxationArgs
  }


  export type rangeTaxationInclude = {
    range?: boolean | rangeArgs
    taxation?: boolean | taxationArgs
  }

  export type rangeTaxationGetPayload<S extends boolean | null | undefined | rangeTaxationArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? rangeTaxation :
    S extends undefined ? never :
    S extends { include: any } & (rangeTaxationArgs | rangeTaxationFindManyArgs)
    ? rangeTaxation  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'range' ? rangeGetPayload<S['include'][P]> :
        P extends 'taxation' ? taxationGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (rangeTaxationArgs | rangeTaxationFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'range' ? rangeGetPayload<S['select'][P]> :
        P extends 'taxation' ? taxationGetPayload<S['select'][P]> :  P extends keyof rangeTaxation ? rangeTaxation[P] : never
  } 
      : rangeTaxation


  type rangeTaxationCountArgs = 
    Omit<rangeTaxationFindManyArgs, 'select' | 'include'> & {
      select?: RangeTaxationCountAggregateInputType | true
    }

  export interface rangeTaxationDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RangeTaxation that matches the filter.
     * @param {rangeTaxationFindUniqueArgs} args - Arguments to find a RangeTaxation
     * @example
     * // Get one RangeTaxation
     * const rangeTaxation = await prisma.rangeTaxation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends rangeTaxationFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, rangeTaxationFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'rangeTaxation'> extends True ? Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>> : Prisma__rangeTaxationClient<rangeTaxationGetPayload<T> | null, null>

    /**
     * Find one RangeTaxation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {rangeTaxationFindUniqueOrThrowArgs} args - Arguments to find a RangeTaxation
     * @example
     * // Get one RangeTaxation
     * const rangeTaxation = await prisma.rangeTaxation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends rangeTaxationFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, rangeTaxationFindUniqueOrThrowArgs>
    ): Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>>

    /**
     * Find the first RangeTaxation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeTaxationFindFirstArgs} args - Arguments to find a RangeTaxation
     * @example
     * // Get one RangeTaxation
     * const rangeTaxation = await prisma.rangeTaxation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends rangeTaxationFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, rangeTaxationFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'rangeTaxation'> extends True ? Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>> : Prisma__rangeTaxationClient<rangeTaxationGetPayload<T> | null, null>

    /**
     * Find the first RangeTaxation that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeTaxationFindFirstOrThrowArgs} args - Arguments to find a RangeTaxation
     * @example
     * // Get one RangeTaxation
     * const rangeTaxation = await prisma.rangeTaxation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends rangeTaxationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, rangeTaxationFindFirstOrThrowArgs>
    ): Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>>

    /**
     * Find zero or more RangeTaxations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeTaxationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RangeTaxations
     * const rangeTaxations = await prisma.rangeTaxation.findMany()
     * 
     * // Get first 10 RangeTaxations
     * const rangeTaxations = await prisma.rangeTaxation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rangeTaxationWithIdOnly = await prisma.rangeTaxation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends rangeTaxationFindManyArgs>(
      args?: SelectSubset<T, rangeTaxationFindManyArgs>
    ): Prisma.PrismaPromise<Array<rangeTaxationGetPayload<T>>>

    /**
     * Create a RangeTaxation.
     * @param {rangeTaxationCreateArgs} args - Arguments to create a RangeTaxation.
     * @example
     * // Create one RangeTaxation
     * const RangeTaxation = await prisma.rangeTaxation.create({
     *   data: {
     *     // ... data to create a RangeTaxation
     *   }
     * })
     * 
    **/
    create<T extends rangeTaxationCreateArgs>(
      args: SelectSubset<T, rangeTaxationCreateArgs>
    ): Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>>

    /**
     * Create many RangeTaxations.
     *     @param {rangeTaxationCreateManyArgs} args - Arguments to create many RangeTaxations.
     *     @example
     *     // Create many RangeTaxations
     *     const rangeTaxation = await prisma.rangeTaxation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends rangeTaxationCreateManyArgs>(
      args?: SelectSubset<T, rangeTaxationCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RangeTaxation.
     * @param {rangeTaxationDeleteArgs} args - Arguments to delete one RangeTaxation.
     * @example
     * // Delete one RangeTaxation
     * const RangeTaxation = await prisma.rangeTaxation.delete({
     *   where: {
     *     // ... filter to delete one RangeTaxation
     *   }
     * })
     * 
    **/
    delete<T extends rangeTaxationDeleteArgs>(
      args: SelectSubset<T, rangeTaxationDeleteArgs>
    ): Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>>

    /**
     * Update one RangeTaxation.
     * @param {rangeTaxationUpdateArgs} args - Arguments to update one RangeTaxation.
     * @example
     * // Update one RangeTaxation
     * const rangeTaxation = await prisma.rangeTaxation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends rangeTaxationUpdateArgs>(
      args: SelectSubset<T, rangeTaxationUpdateArgs>
    ): Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>>

    /**
     * Delete zero or more RangeTaxations.
     * @param {rangeTaxationDeleteManyArgs} args - Arguments to filter RangeTaxations to delete.
     * @example
     * // Delete a few RangeTaxations
     * const { count } = await prisma.rangeTaxation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends rangeTaxationDeleteManyArgs>(
      args?: SelectSubset<T, rangeTaxationDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RangeTaxations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeTaxationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RangeTaxations
     * const rangeTaxation = await prisma.rangeTaxation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends rangeTaxationUpdateManyArgs>(
      args: SelectSubset<T, rangeTaxationUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RangeTaxation.
     * @param {rangeTaxationUpsertArgs} args - Arguments to update or create a RangeTaxation.
     * @example
     * // Update or create a RangeTaxation
     * const rangeTaxation = await prisma.rangeTaxation.upsert({
     *   create: {
     *     // ... data to create a RangeTaxation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RangeTaxation we want to update
     *   }
     * })
    **/
    upsert<T extends rangeTaxationUpsertArgs>(
      args: SelectSubset<T, rangeTaxationUpsertArgs>
    ): Prisma__rangeTaxationClient<rangeTaxationGetPayload<T>>

    /**
     * Count the number of RangeTaxations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rangeTaxationCountArgs} args - Arguments to filter RangeTaxations to count.
     * @example
     * // Count the number of RangeTaxations
     * const count = await prisma.rangeTaxation.count({
     *   where: {
     *     // ... the filter for the RangeTaxations we want to count
     *   }
     * })
    **/
    count<T extends rangeTaxationCountArgs>(
      args?: Subset<T, rangeTaxationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RangeTaxationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RangeTaxation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeTaxationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RangeTaxationAggregateArgs>(args: Subset<T, RangeTaxationAggregateArgs>): Prisma.PrismaPromise<GetRangeTaxationAggregateType<T>>

    /**
     * Group by RangeTaxation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RangeTaxationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RangeTaxationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RangeTaxationGroupByArgs['orderBy'] }
        : { orderBy?: RangeTaxationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RangeTaxationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRangeTaxationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for rangeTaxation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__rangeTaxationClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    range<T extends rangeArgs= {}>(args?: Subset<T, rangeArgs>): Prisma__rangeClient<rangeGetPayload<T> | Null>;

    taxation<T extends taxationArgs= {}>(args?: Subset<T, taxationArgs>): Prisma__taxationClient<taxationGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * rangeTaxation base type for findUnique actions
   */
  export type rangeTaxationFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * Filter, which rangeTaxation to fetch.
     */
    where: rangeTaxationWhereUniqueInput
  }

  /**
   * rangeTaxation findUnique
   */
  export interface rangeTaxationFindUniqueArgs extends rangeTaxationFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rangeTaxation findUniqueOrThrow
   */
  export type rangeTaxationFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * Filter, which rangeTaxation to fetch.
     */
    where: rangeTaxationWhereUniqueInput
  }


  /**
   * rangeTaxation base type for findFirst actions
   */
  export type rangeTaxationFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * Filter, which rangeTaxation to fetch.
     */
    where?: rangeTaxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rangeTaxations to fetch.
     */
    orderBy?: Enumerable<rangeTaxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rangeTaxations.
     */
    cursor?: rangeTaxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rangeTaxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rangeTaxations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rangeTaxations.
     */
    distinct?: Enumerable<RangeTaxationScalarFieldEnum>
  }

  /**
   * rangeTaxation findFirst
   */
  export interface rangeTaxationFindFirstArgs extends rangeTaxationFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * rangeTaxation findFirstOrThrow
   */
  export type rangeTaxationFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * Filter, which rangeTaxation to fetch.
     */
    where?: rangeTaxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rangeTaxations to fetch.
     */
    orderBy?: Enumerable<rangeTaxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rangeTaxations.
     */
    cursor?: rangeTaxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rangeTaxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rangeTaxations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rangeTaxations.
     */
    distinct?: Enumerable<RangeTaxationScalarFieldEnum>
  }


  /**
   * rangeTaxation findMany
   */
  export type rangeTaxationFindManyArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * Filter, which rangeTaxations to fetch.
     */
    where?: rangeTaxationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rangeTaxations to fetch.
     */
    orderBy?: Enumerable<rangeTaxationOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rangeTaxations.
     */
    cursor?: rangeTaxationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rangeTaxations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rangeTaxations.
     */
    skip?: number
    distinct?: Enumerable<RangeTaxationScalarFieldEnum>
  }


  /**
   * rangeTaxation create
   */
  export type rangeTaxationCreateArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * The data needed to create a rangeTaxation.
     */
    data: XOR<rangeTaxationCreateInput, rangeTaxationUncheckedCreateInput>
  }


  /**
   * rangeTaxation createMany
   */
  export type rangeTaxationCreateManyArgs = {
    /**
     * The data used to create many rangeTaxations.
     */
    data: Enumerable<rangeTaxationCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * rangeTaxation update
   */
  export type rangeTaxationUpdateArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * The data needed to update a rangeTaxation.
     */
    data: XOR<rangeTaxationUpdateInput, rangeTaxationUncheckedUpdateInput>
    /**
     * Choose, which rangeTaxation to update.
     */
    where: rangeTaxationWhereUniqueInput
  }


  /**
   * rangeTaxation updateMany
   */
  export type rangeTaxationUpdateManyArgs = {
    /**
     * The data used to update rangeTaxations.
     */
    data: XOR<rangeTaxationUpdateManyMutationInput, rangeTaxationUncheckedUpdateManyInput>
    /**
     * Filter which rangeTaxations to update
     */
    where?: rangeTaxationWhereInput
  }


  /**
   * rangeTaxation upsert
   */
  export type rangeTaxationUpsertArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * The filter to search for the rangeTaxation to update in case it exists.
     */
    where: rangeTaxationWhereUniqueInput
    /**
     * In case the rangeTaxation found by the `where` argument doesn't exist, create a new rangeTaxation with this data.
     */
    create: XOR<rangeTaxationCreateInput, rangeTaxationUncheckedCreateInput>
    /**
     * In case the rangeTaxation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rangeTaxationUpdateInput, rangeTaxationUncheckedUpdateInput>
  }


  /**
   * rangeTaxation delete
   */
  export type rangeTaxationDeleteArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
    /**
     * Filter which rangeTaxation to delete.
     */
    where: rangeTaxationWhereUniqueInput
  }


  /**
   * rangeTaxation deleteMany
   */
  export type rangeTaxationDeleteManyArgs = {
    /**
     * Filter which rangeTaxations to delete
     */
    where?: rangeTaxationWhereInput
  }


  /**
   * rangeTaxation without action
   */
  export type rangeTaxationArgs = {
    /**
     * Select specific fields to fetch from the rangeTaxation
     */
    select?: rangeTaxationSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: rangeTaxationInclude | null
  }



  /**
   * Model typeRange
   */


  export type AggregateTypeRange = {
    _count: TypeRangeCountAggregateOutputType | null
    _avg: TypeRangeAvgAggregateOutputType | null
    _sum: TypeRangeSumAggregateOutputType | null
    _min: TypeRangeMinAggregateOutputType | null
    _max: TypeRangeMaxAggregateOutputType | null
  }

  export type TypeRangeAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
    rangeId: number | null
  }

  export type TypeRangeSumAggregateOutputType = {
    id: number | null
    typeId: number | null
    rangeId: number | null
  }

  export type TypeRangeMinAggregateOutputType = {
    id: number | null
    typeId: number | null
    rangeId: number | null
  }

  export type TypeRangeMaxAggregateOutputType = {
    id: number | null
    typeId: number | null
    rangeId: number | null
  }

  export type TypeRangeCountAggregateOutputType = {
    id: number
    typeId: number
    rangeId: number
    _all: number
  }


  export type TypeRangeAvgAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
  }

  export type TypeRangeSumAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
  }

  export type TypeRangeMinAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
  }

  export type TypeRangeMaxAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
  }

  export type TypeRangeCountAggregateInputType = {
    id?: true
    typeId?: true
    rangeId?: true
    _all?: true
  }

  export type TypeRangeAggregateArgs = {
    /**
     * Filter which typeRange to aggregate.
     */
    where?: typeRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeRanges to fetch.
     */
    orderBy?: Enumerable<typeRangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typeRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned typeRanges
    **/
    _count?: true | TypeRangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeRangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeRangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeRangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeRangeMaxAggregateInputType
  }

  export type GetTypeRangeAggregateType<T extends TypeRangeAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeRange[P]>
      : GetScalarType<T[P], AggregateTypeRange[P]>
  }




  export type TypeRangeGroupByArgs = {
    where?: typeRangeWhereInput
    orderBy?: Enumerable<typeRangeOrderByWithAggregationInput>
    by: TypeRangeScalarFieldEnum[]
    having?: typeRangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeRangeCountAggregateInputType | true
    _avg?: TypeRangeAvgAggregateInputType
    _sum?: TypeRangeSumAggregateInputType
    _min?: TypeRangeMinAggregateInputType
    _max?: TypeRangeMaxAggregateInputType
  }


  export type TypeRangeGroupByOutputType = {
    id: number
    typeId: number
    rangeId: number
    _count: TypeRangeCountAggregateOutputType | null
    _avg: TypeRangeAvgAggregateOutputType | null
    _sum: TypeRangeSumAggregateOutputType | null
    _min: TypeRangeMinAggregateOutputType | null
    _max: TypeRangeMaxAggregateOutputType | null
  }

  type GetTypeRangeGroupByPayload<T extends TypeRangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TypeRangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeRangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeRangeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeRangeGroupByOutputType[P]>
        }
      >
    >


  export type typeRangeSelect = {
    id?: boolean
    typeId?: boolean
    rangeId?: boolean
    type?: boolean | typeArgs
    range?: boolean | rangeArgs
  }


  export type typeRangeInclude = {
    type?: boolean | typeArgs
    range?: boolean | rangeArgs
  }

  export type typeRangeGetPayload<S extends boolean | null | undefined | typeRangeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? typeRange :
    S extends undefined ? never :
    S extends { include: any } & (typeRangeArgs | typeRangeFindManyArgs)
    ? typeRange  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'type' ? typeGetPayload<S['include'][P]> :
        P extends 'range' ? rangeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (typeRangeArgs | typeRangeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'type' ? typeGetPayload<S['select'][P]> :
        P extends 'range' ? rangeGetPayload<S['select'][P]> :  P extends keyof typeRange ? typeRange[P] : never
  } 
      : typeRange


  type typeRangeCountArgs = 
    Omit<typeRangeFindManyArgs, 'select' | 'include'> & {
      select?: TypeRangeCountAggregateInputType | true
    }

  export interface typeRangeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TypeRange that matches the filter.
     * @param {typeRangeFindUniqueArgs} args - Arguments to find a TypeRange
     * @example
     * // Get one TypeRange
     * const typeRange = await prisma.typeRange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends typeRangeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, typeRangeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'typeRange'> extends True ? Prisma__typeRangeClient<typeRangeGetPayload<T>> : Prisma__typeRangeClient<typeRangeGetPayload<T> | null, null>

    /**
     * Find one TypeRange that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {typeRangeFindUniqueOrThrowArgs} args - Arguments to find a TypeRange
     * @example
     * // Get one TypeRange
     * const typeRange = await prisma.typeRange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends typeRangeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, typeRangeFindUniqueOrThrowArgs>
    ): Prisma__typeRangeClient<typeRangeGetPayload<T>>

    /**
     * Find the first TypeRange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeRangeFindFirstArgs} args - Arguments to find a TypeRange
     * @example
     * // Get one TypeRange
     * const typeRange = await prisma.typeRange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends typeRangeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, typeRangeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'typeRange'> extends True ? Prisma__typeRangeClient<typeRangeGetPayload<T>> : Prisma__typeRangeClient<typeRangeGetPayload<T> | null, null>

    /**
     * Find the first TypeRange that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeRangeFindFirstOrThrowArgs} args - Arguments to find a TypeRange
     * @example
     * // Get one TypeRange
     * const typeRange = await prisma.typeRange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends typeRangeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, typeRangeFindFirstOrThrowArgs>
    ): Prisma__typeRangeClient<typeRangeGetPayload<T>>

    /**
     * Find zero or more TypeRanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeRangeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeRanges
     * const typeRanges = await prisma.typeRange.findMany()
     * 
     * // Get first 10 TypeRanges
     * const typeRanges = await prisma.typeRange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeRangeWithIdOnly = await prisma.typeRange.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends typeRangeFindManyArgs>(
      args?: SelectSubset<T, typeRangeFindManyArgs>
    ): Prisma.PrismaPromise<Array<typeRangeGetPayload<T>>>

    /**
     * Create a TypeRange.
     * @param {typeRangeCreateArgs} args - Arguments to create a TypeRange.
     * @example
     * // Create one TypeRange
     * const TypeRange = await prisma.typeRange.create({
     *   data: {
     *     // ... data to create a TypeRange
     *   }
     * })
     * 
    **/
    create<T extends typeRangeCreateArgs>(
      args: SelectSubset<T, typeRangeCreateArgs>
    ): Prisma__typeRangeClient<typeRangeGetPayload<T>>

    /**
     * Create many TypeRanges.
     *     @param {typeRangeCreateManyArgs} args - Arguments to create many TypeRanges.
     *     @example
     *     // Create many TypeRanges
     *     const typeRange = await prisma.typeRange.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends typeRangeCreateManyArgs>(
      args?: SelectSubset<T, typeRangeCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TypeRange.
     * @param {typeRangeDeleteArgs} args - Arguments to delete one TypeRange.
     * @example
     * // Delete one TypeRange
     * const TypeRange = await prisma.typeRange.delete({
     *   where: {
     *     // ... filter to delete one TypeRange
     *   }
     * })
     * 
    **/
    delete<T extends typeRangeDeleteArgs>(
      args: SelectSubset<T, typeRangeDeleteArgs>
    ): Prisma__typeRangeClient<typeRangeGetPayload<T>>

    /**
     * Update one TypeRange.
     * @param {typeRangeUpdateArgs} args - Arguments to update one TypeRange.
     * @example
     * // Update one TypeRange
     * const typeRange = await prisma.typeRange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends typeRangeUpdateArgs>(
      args: SelectSubset<T, typeRangeUpdateArgs>
    ): Prisma__typeRangeClient<typeRangeGetPayload<T>>

    /**
     * Delete zero or more TypeRanges.
     * @param {typeRangeDeleteManyArgs} args - Arguments to filter TypeRanges to delete.
     * @example
     * // Delete a few TypeRanges
     * const { count } = await prisma.typeRange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends typeRangeDeleteManyArgs>(
      args?: SelectSubset<T, typeRangeDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeRangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeRanges
     * const typeRange = await prisma.typeRange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends typeRangeUpdateManyArgs>(
      args: SelectSubset<T, typeRangeUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TypeRange.
     * @param {typeRangeUpsertArgs} args - Arguments to update or create a TypeRange.
     * @example
     * // Update or create a TypeRange
     * const typeRange = await prisma.typeRange.upsert({
     *   create: {
     *     // ... data to create a TypeRange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeRange we want to update
     *   }
     * })
    **/
    upsert<T extends typeRangeUpsertArgs>(
      args: SelectSubset<T, typeRangeUpsertArgs>
    ): Prisma__typeRangeClient<typeRangeGetPayload<T>>

    /**
     * Count the number of TypeRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeRangeCountArgs} args - Arguments to filter TypeRanges to count.
     * @example
     * // Count the number of TypeRanges
     * const count = await prisma.typeRange.count({
     *   where: {
     *     // ... the filter for the TypeRanges we want to count
     *   }
     * })
    **/
    count<T extends typeRangeCountArgs>(
      args?: Subset<T, typeRangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeRangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeRangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeRangeAggregateArgs>(args: Subset<T, TypeRangeAggregateArgs>): Prisma.PrismaPromise<GetTypeRangeAggregateType<T>>

    /**
     * Group by TypeRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeRangeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeRangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeRangeGroupByArgs['orderBy'] }
        : { orderBy?: TypeRangeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeRangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for typeRange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__typeRangeClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    type<T extends typeArgs= {}>(args?: Subset<T, typeArgs>): Prisma__typeClient<typeGetPayload<T> | Null>;

    range<T extends rangeArgs= {}>(args?: Subset<T, rangeArgs>): Prisma__rangeClient<rangeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * typeRange base type for findUnique actions
   */
  export type typeRangeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * Filter, which typeRange to fetch.
     */
    where: typeRangeWhereUniqueInput
  }

  /**
   * typeRange findUnique
   */
  export interface typeRangeFindUniqueArgs extends typeRangeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * typeRange findUniqueOrThrow
   */
  export type typeRangeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * Filter, which typeRange to fetch.
     */
    where: typeRangeWhereUniqueInput
  }


  /**
   * typeRange base type for findFirst actions
   */
  export type typeRangeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * Filter, which typeRange to fetch.
     */
    where?: typeRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeRanges to fetch.
     */
    orderBy?: Enumerable<typeRangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for typeRanges.
     */
    cursor?: typeRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of typeRanges.
     */
    distinct?: Enumerable<TypeRangeScalarFieldEnum>
  }

  /**
   * typeRange findFirst
   */
  export interface typeRangeFindFirstArgs extends typeRangeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * typeRange findFirstOrThrow
   */
  export type typeRangeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * Filter, which typeRange to fetch.
     */
    where?: typeRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeRanges to fetch.
     */
    orderBy?: Enumerable<typeRangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for typeRanges.
     */
    cursor?: typeRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of typeRanges.
     */
    distinct?: Enumerable<TypeRangeScalarFieldEnum>
  }


  /**
   * typeRange findMany
   */
  export type typeRangeFindManyArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * Filter, which typeRanges to fetch.
     */
    where?: typeRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of typeRanges to fetch.
     */
    orderBy?: Enumerable<typeRangeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing typeRanges.
     */
    cursor?: typeRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` typeRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` typeRanges.
     */
    skip?: number
    distinct?: Enumerable<TypeRangeScalarFieldEnum>
  }


  /**
   * typeRange create
   */
  export type typeRangeCreateArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * The data needed to create a typeRange.
     */
    data: XOR<typeRangeCreateInput, typeRangeUncheckedCreateInput>
  }


  /**
   * typeRange createMany
   */
  export type typeRangeCreateManyArgs = {
    /**
     * The data used to create many typeRanges.
     */
    data: Enumerable<typeRangeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * typeRange update
   */
  export type typeRangeUpdateArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * The data needed to update a typeRange.
     */
    data: XOR<typeRangeUpdateInput, typeRangeUncheckedUpdateInput>
    /**
     * Choose, which typeRange to update.
     */
    where: typeRangeWhereUniqueInput
  }


  /**
   * typeRange updateMany
   */
  export type typeRangeUpdateManyArgs = {
    /**
     * The data used to update typeRanges.
     */
    data: XOR<typeRangeUpdateManyMutationInput, typeRangeUncheckedUpdateManyInput>
    /**
     * Filter which typeRanges to update
     */
    where?: typeRangeWhereInput
  }


  /**
   * typeRange upsert
   */
  export type typeRangeUpsertArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * The filter to search for the typeRange to update in case it exists.
     */
    where: typeRangeWhereUniqueInput
    /**
     * In case the typeRange found by the `where` argument doesn't exist, create a new typeRange with this data.
     */
    create: XOR<typeRangeCreateInput, typeRangeUncheckedCreateInput>
    /**
     * In case the typeRange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typeRangeUpdateInput, typeRangeUncheckedUpdateInput>
  }


  /**
   * typeRange delete
   */
  export type typeRangeDeleteArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
    /**
     * Filter which typeRange to delete.
     */
    where: typeRangeWhereUniqueInput
  }


  /**
   * typeRange deleteMany
   */
  export type typeRangeDeleteManyArgs = {
    /**
     * Filter which typeRanges to delete
     */
    where?: typeRangeWhereInput
  }


  /**
   * typeRange without action
   */
  export type typeRangeArgs = {
    /**
     * Select specific fields to fetch from the typeRange
     */
    select?: typeRangeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: typeRangeInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DinosaurScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type DinosaurScalarFieldEnum = (typeof DinosaurScalarFieldEnum)[keyof typeof DinosaurScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const RangeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RangeScalarFieldEnum = (typeof RangeScalarFieldEnum)[keyof typeof RangeScalarFieldEnum]


  export const RangeTaxationScalarFieldEnum: {
    id: 'id',
    rangeId: 'rangeId',
    taxationId: 'taxationId'
  };

  export type RangeTaxationScalarFieldEnum = (typeof RangeTaxationScalarFieldEnum)[keyof typeof RangeTaxationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TaxationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    isPercentage: 'isPercentage',
    isDividedOneHundred: 'isDividedOneHundred'
  };

  export type TaxationScalarFieldEnum = (typeof TaxationScalarFieldEnum)[keyof typeof TaxationScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TypeRangeScalarFieldEnum: {
    id: 'id',
    typeId: 'typeId',
    rangeId: 'rangeId'
  };

  export type TypeRangeScalarFieldEnum = (typeof TypeRangeScalarFieldEnum)[keyof typeof TypeRangeScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type DinosaurWhereInput = {
    AND?: Enumerable<DinosaurWhereInput>
    OR?: Enumerable<DinosaurWhereInput>
    NOT?: Enumerable<DinosaurWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
  }

  export type DinosaurOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type DinosaurOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: DinosaurCountOrderByAggregateInput
    _avg?: DinosaurAvgOrderByAggregateInput
    _max?: DinosaurMaxOrderByAggregateInput
    _min?: DinosaurMinOrderByAggregateInput
    _sum?: DinosaurSumOrderByAggregateInput
  }

  export type DinosaurScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DinosaurScalarWhereWithAggregatesInput>
    OR?: Enumerable<DinosaurScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DinosaurScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type taxationWhereInput = {
    AND?: Enumerable<taxationWhereInput>
    OR?: Enumerable<taxationWhereInput>
    NOT?: Enumerable<taxationWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    value?: IntFilter | number
    isPercentage?: BoolFilter | boolean
    isDividedOneHundred?: BoolFilter | boolean
    rangeTaxation?: RangeTaxationListRelationFilter
  }

  export type taxationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isPercentage?: SortOrder
    isDividedOneHundred?: SortOrder
    rangeTaxation?: rangeTaxationOrderByRelationAggregateInput
  }

  export type taxationWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type taxationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isPercentage?: SortOrder
    isDividedOneHundred?: SortOrder
    _count?: taxationCountOrderByAggregateInput
    _avg?: taxationAvgOrderByAggregateInput
    _max?: taxationMaxOrderByAggregateInput
    _min?: taxationMinOrderByAggregateInput
    _sum?: taxationSumOrderByAggregateInput
  }

  export type taxationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<taxationScalarWhereWithAggregatesInput>
    OR?: Enumerable<taxationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<taxationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    value?: IntWithAggregatesFilter | number
    isPercentage?: BoolWithAggregatesFilter | boolean
    isDividedOneHundred?: BoolWithAggregatesFilter | boolean
  }

  export type rangeWhereInput = {
    AND?: Enumerable<rangeWhereInput>
    OR?: Enumerable<rangeWhereInput>
    NOT?: Enumerable<rangeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    rangeTaxation?: RangeTaxationListRelationFilter
    typeRange?: TypeRangeListRelationFilter
  }

  export type rangeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rangeTaxation?: rangeTaxationOrderByRelationAggregateInput
    typeRange?: typeRangeOrderByRelationAggregateInput
  }

  export type rangeWhereUniqueInput = {
    id?: number
    name?: string
    description?: string
  }

  export type rangeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: rangeCountOrderByAggregateInput
    _avg?: rangeAvgOrderByAggregateInput
    _max?: rangeMaxOrderByAggregateInput
    _min?: rangeMinOrderByAggregateInput
    _sum?: rangeSumOrderByAggregateInput
  }

  export type rangeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<rangeScalarWhereWithAggregatesInput>
    OR?: Enumerable<rangeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<rangeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type typeWhereInput = {
    AND?: Enumerable<typeWhereInput>
    OR?: Enumerable<typeWhereInput>
    NOT?: Enumerable<typeWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    typeRange?: TypeRangeListRelationFilter
  }

  export type typeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    typeRange?: typeRangeOrderByRelationAggregateInput
  }

  export type typeWhereUniqueInput = {
    id?: number
    name?: string
    description?: string
  }

  export type typeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: typeCountOrderByAggregateInput
    _avg?: typeAvgOrderByAggregateInput
    _max?: typeMaxOrderByAggregateInput
    _min?: typeMinOrderByAggregateInput
    _sum?: typeSumOrderByAggregateInput
  }

  export type typeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<typeScalarWhereWithAggregatesInput>
    OR?: Enumerable<typeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<typeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type rangeTaxationWhereInput = {
    AND?: Enumerable<rangeTaxationWhereInput>
    OR?: Enumerable<rangeTaxationWhereInput>
    NOT?: Enumerable<rangeTaxationWhereInput>
    id?: IntFilter | number
    rangeId?: IntFilter | number
    taxationId?: IntFilter | number
    range?: XOR<RangeRelationFilter, rangeWhereInput>
    taxation?: XOR<TaxationRelationFilter, taxationWhereInput>
  }

  export type rangeTaxationOrderByWithRelationInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
    range?: rangeOrderByWithRelationInput
    taxation?: taxationOrderByWithRelationInput
  }

  export type rangeTaxationWhereUniqueInput = {
    id?: number
  }

  export type rangeTaxationOrderByWithAggregationInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
    _count?: rangeTaxationCountOrderByAggregateInput
    _avg?: rangeTaxationAvgOrderByAggregateInput
    _max?: rangeTaxationMaxOrderByAggregateInput
    _min?: rangeTaxationMinOrderByAggregateInput
    _sum?: rangeTaxationSumOrderByAggregateInput
  }

  export type rangeTaxationScalarWhereWithAggregatesInput = {
    AND?: Enumerable<rangeTaxationScalarWhereWithAggregatesInput>
    OR?: Enumerable<rangeTaxationScalarWhereWithAggregatesInput>
    NOT?: Enumerable<rangeTaxationScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    rangeId?: IntWithAggregatesFilter | number
    taxationId?: IntWithAggregatesFilter | number
  }

  export type typeRangeWhereInput = {
    AND?: Enumerable<typeRangeWhereInput>
    OR?: Enumerable<typeRangeWhereInput>
    NOT?: Enumerable<typeRangeWhereInput>
    id?: IntFilter | number
    typeId?: IntFilter | number
    rangeId?: IntFilter | number
    type?: XOR<TypeRelationFilter, typeWhereInput>
    range?: XOR<RangeRelationFilter, rangeWhereInput>
  }

  export type typeRangeOrderByWithRelationInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    type?: typeOrderByWithRelationInput
    range?: rangeOrderByWithRelationInput
  }

  export type typeRangeWhereUniqueInput = {
    id?: number
  }

  export type typeRangeOrderByWithAggregationInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
    _count?: typeRangeCountOrderByAggregateInput
    _avg?: typeRangeAvgOrderByAggregateInput
    _max?: typeRangeMaxOrderByAggregateInput
    _min?: typeRangeMinOrderByAggregateInput
    _sum?: typeRangeSumOrderByAggregateInput
  }

  export type typeRangeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<typeRangeScalarWhereWithAggregatesInput>
    OR?: Enumerable<typeRangeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<typeRangeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    typeId?: IntWithAggregatesFilter | number
    rangeId?: IntWithAggregatesFilter | number
  }

  export type DinosaurCreateInput = {
    name: string
    description: string
  }

  export type DinosaurUncheckedCreateInput = {
    id?: number
    name: string
    description: string
  }

  export type DinosaurUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DinosaurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DinosaurCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type DinosaurUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type DinosaurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type taxationCreateInput = {
    name: string
    value: number
    isPercentage: boolean
    isDividedOneHundred: boolean
    rangeTaxation?: rangeTaxationCreateNestedManyWithoutTaxationInput
  }

  export type taxationUncheckedCreateInput = {
    id?: number
    name: string
    value: number
    isPercentage: boolean
    isDividedOneHundred: boolean
    rangeTaxation?: rangeTaxationUncheckedCreateNestedManyWithoutTaxationInput
  }

  export type taxationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    isDividedOneHundred?: BoolFieldUpdateOperationsInput | boolean
    rangeTaxation?: rangeTaxationUpdateManyWithoutTaxationNestedInput
  }

  export type taxationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    isDividedOneHundred?: BoolFieldUpdateOperationsInput | boolean
    rangeTaxation?: rangeTaxationUncheckedUpdateManyWithoutTaxationNestedInput
  }

  export type taxationCreateManyInput = {
    id?: number
    name: string
    value: number
    isPercentage: boolean
    isDividedOneHundred: boolean
  }

  export type taxationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    isDividedOneHundred?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taxationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    isDividedOneHundred?: BoolFieldUpdateOperationsInput | boolean
  }

  export type rangeCreateInput = {
    name: string
    description: string
    rangeTaxation?: rangeTaxationCreateNestedManyWithoutRangeInput
    typeRange?: typeRangeCreateNestedManyWithoutRangeInput
  }

  export type rangeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    rangeTaxation?: rangeTaxationUncheckedCreateNestedManyWithoutRangeInput
    typeRange?: typeRangeUncheckedCreateNestedManyWithoutRangeInput
  }

  export type rangeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rangeTaxation?: rangeTaxationUpdateManyWithoutRangeNestedInput
    typeRange?: typeRangeUpdateManyWithoutRangeNestedInput
  }

  export type rangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rangeTaxation?: rangeTaxationUncheckedUpdateManyWithoutRangeNestedInput
    typeRange?: typeRangeUncheckedUpdateManyWithoutRangeNestedInput
  }

  export type rangeCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type rangeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type rangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type typeCreateInput = {
    name: string
    description: string
    typeRange?: typeRangeCreateNestedManyWithoutTypeInput
  }

  export type typeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    typeRange?: typeRangeUncheckedCreateNestedManyWithoutTypeInput
  }

  export type typeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeRange?: typeRangeUpdateManyWithoutTypeNestedInput
  }

  export type typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeRange?: typeRangeUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type typeCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type typeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type rangeTaxationCreateInput = {
    range: rangeCreateNestedOneWithoutRangeTaxationInput
    taxation: taxationCreateNestedOneWithoutRangeTaxationInput
  }

  export type rangeTaxationUncheckedCreateInput = {
    id?: number
    rangeId: number
    taxationId: number
  }

  export type rangeTaxationUpdateInput = {
    range?: rangeUpdateOneRequiredWithoutRangeTaxationNestedInput
    taxation?: taxationUpdateOneRequiredWithoutRangeTaxationNestedInput
  }

  export type rangeTaxationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
    taxationId?: IntFieldUpdateOperationsInput | number
  }

  export type rangeTaxationCreateManyInput = {
    id?: number
    rangeId: number
    taxationId: number
  }

  export type rangeTaxationUpdateManyMutationInput = {

  }

  export type rangeTaxationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
    taxationId?: IntFieldUpdateOperationsInput | number
  }

  export type typeRangeCreateInput = {
    type: typeCreateNestedOneWithoutTypeRangeInput
    range: rangeCreateNestedOneWithoutTypeRangeInput
  }

  export type typeRangeUncheckedCreateInput = {
    id?: number
    typeId: number
    rangeId: number
  }

  export type typeRangeUpdateInput = {
    type?: typeUpdateOneRequiredWithoutTypeRangeNestedInput
    range?: rangeUpdateOneRequiredWithoutTypeRangeNestedInput
  }

  export type typeRangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
  }

  export type typeRangeCreateManyInput = {
    id?: number
    typeId: number
    rangeId: number
  }

  export type typeRangeUpdateManyMutationInput = {

  }

  export type typeRangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DinosaurCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DinosaurMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type DinosaurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type RangeTaxationListRelationFilter = {
    every?: rangeTaxationWhereInput
    some?: rangeTaxationWhereInput
    none?: rangeTaxationWhereInput
  }

  export type rangeTaxationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type taxationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isPercentage?: SortOrder
    isDividedOneHundred?: SortOrder
  }

  export type taxationAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type taxationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isPercentage?: SortOrder
    isDividedOneHundred?: SortOrder
  }

  export type taxationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isPercentage?: SortOrder
    isDividedOneHundred?: SortOrder
  }

  export type taxationSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type TypeRangeListRelationFilter = {
    every?: typeRangeWhereInput
    some?: typeRangeWhereInput
    none?: typeRangeWhereInput
  }

  export type typeRangeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rangeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type rangeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rangeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type rangeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type rangeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type typeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type typeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type typeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RangeRelationFilter = {
    is?: rangeWhereInput
    isNot?: rangeWhereInput
  }

  export type TaxationRelationFilter = {
    is?: taxationWhereInput
    isNot?: taxationWhereInput
  }

  export type rangeTaxationCountOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
  }

  export type rangeTaxationAvgOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
  }

  export type rangeTaxationMaxOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
  }

  export type rangeTaxationMinOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
  }

  export type rangeTaxationSumOrderByAggregateInput = {
    id?: SortOrder
    rangeId?: SortOrder
    taxationId?: SortOrder
  }

  export type TypeRelationFilter = {
    is?: typeWhereInput
    isNot?: typeWhereInput
  }

  export type typeRangeCountOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
  }

  export type typeRangeAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
  }

  export type typeRangeMaxOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
  }

  export type typeRangeMinOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
  }

  export type typeRangeSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
    rangeId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type rangeTaxationCreateNestedManyWithoutTaxationInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutTaxationInput>, Enumerable<rangeTaxationUncheckedCreateWithoutTaxationInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutTaxationInput>
    createMany?: rangeTaxationCreateManyTaxationInputEnvelope
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
  }

  export type rangeTaxationUncheckedCreateNestedManyWithoutTaxationInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutTaxationInput>, Enumerable<rangeTaxationUncheckedCreateWithoutTaxationInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutTaxationInput>
    createMany?: rangeTaxationCreateManyTaxationInputEnvelope
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type rangeTaxationUpdateManyWithoutTaxationNestedInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutTaxationInput>, Enumerable<rangeTaxationUncheckedCreateWithoutTaxationInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutTaxationInput>
    upsert?: Enumerable<rangeTaxationUpsertWithWhereUniqueWithoutTaxationInput>
    createMany?: rangeTaxationCreateManyTaxationInputEnvelope
    set?: Enumerable<rangeTaxationWhereUniqueInput>
    disconnect?: Enumerable<rangeTaxationWhereUniqueInput>
    delete?: Enumerable<rangeTaxationWhereUniqueInput>
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
    update?: Enumerable<rangeTaxationUpdateWithWhereUniqueWithoutTaxationInput>
    updateMany?: Enumerable<rangeTaxationUpdateManyWithWhereWithoutTaxationInput>
    deleteMany?: Enumerable<rangeTaxationScalarWhereInput>
  }

  export type rangeTaxationUncheckedUpdateManyWithoutTaxationNestedInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutTaxationInput>, Enumerable<rangeTaxationUncheckedCreateWithoutTaxationInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutTaxationInput>
    upsert?: Enumerable<rangeTaxationUpsertWithWhereUniqueWithoutTaxationInput>
    createMany?: rangeTaxationCreateManyTaxationInputEnvelope
    set?: Enumerable<rangeTaxationWhereUniqueInput>
    disconnect?: Enumerable<rangeTaxationWhereUniqueInput>
    delete?: Enumerable<rangeTaxationWhereUniqueInput>
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
    update?: Enumerable<rangeTaxationUpdateWithWhereUniqueWithoutTaxationInput>
    updateMany?: Enumerable<rangeTaxationUpdateManyWithWhereWithoutTaxationInput>
    deleteMany?: Enumerable<rangeTaxationScalarWhereInput>
  }

  export type rangeTaxationCreateNestedManyWithoutRangeInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutRangeInput>, Enumerable<rangeTaxationUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutRangeInput>
    createMany?: rangeTaxationCreateManyRangeInputEnvelope
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
  }

  export type typeRangeCreateNestedManyWithoutRangeInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutRangeInput>, Enumerable<typeRangeUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutRangeInput>
    createMany?: typeRangeCreateManyRangeInputEnvelope
    connect?: Enumerable<typeRangeWhereUniqueInput>
  }

  export type rangeTaxationUncheckedCreateNestedManyWithoutRangeInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutRangeInput>, Enumerable<rangeTaxationUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutRangeInput>
    createMany?: rangeTaxationCreateManyRangeInputEnvelope
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
  }

  export type typeRangeUncheckedCreateNestedManyWithoutRangeInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutRangeInput>, Enumerable<typeRangeUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutRangeInput>
    createMany?: typeRangeCreateManyRangeInputEnvelope
    connect?: Enumerable<typeRangeWhereUniqueInput>
  }

  export type rangeTaxationUpdateManyWithoutRangeNestedInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutRangeInput>, Enumerable<rangeTaxationUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutRangeInput>
    upsert?: Enumerable<rangeTaxationUpsertWithWhereUniqueWithoutRangeInput>
    createMany?: rangeTaxationCreateManyRangeInputEnvelope
    set?: Enumerable<rangeTaxationWhereUniqueInput>
    disconnect?: Enumerable<rangeTaxationWhereUniqueInput>
    delete?: Enumerable<rangeTaxationWhereUniqueInput>
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
    update?: Enumerable<rangeTaxationUpdateWithWhereUniqueWithoutRangeInput>
    updateMany?: Enumerable<rangeTaxationUpdateManyWithWhereWithoutRangeInput>
    deleteMany?: Enumerable<rangeTaxationScalarWhereInput>
  }

  export type typeRangeUpdateManyWithoutRangeNestedInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutRangeInput>, Enumerable<typeRangeUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutRangeInput>
    upsert?: Enumerable<typeRangeUpsertWithWhereUniqueWithoutRangeInput>
    createMany?: typeRangeCreateManyRangeInputEnvelope
    set?: Enumerable<typeRangeWhereUniqueInput>
    disconnect?: Enumerable<typeRangeWhereUniqueInput>
    delete?: Enumerable<typeRangeWhereUniqueInput>
    connect?: Enumerable<typeRangeWhereUniqueInput>
    update?: Enumerable<typeRangeUpdateWithWhereUniqueWithoutRangeInput>
    updateMany?: Enumerable<typeRangeUpdateManyWithWhereWithoutRangeInput>
    deleteMany?: Enumerable<typeRangeScalarWhereInput>
  }

  export type rangeTaxationUncheckedUpdateManyWithoutRangeNestedInput = {
    create?: XOR<Enumerable<rangeTaxationCreateWithoutRangeInput>, Enumerable<rangeTaxationUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<rangeTaxationCreateOrConnectWithoutRangeInput>
    upsert?: Enumerable<rangeTaxationUpsertWithWhereUniqueWithoutRangeInput>
    createMany?: rangeTaxationCreateManyRangeInputEnvelope
    set?: Enumerable<rangeTaxationWhereUniqueInput>
    disconnect?: Enumerable<rangeTaxationWhereUniqueInput>
    delete?: Enumerable<rangeTaxationWhereUniqueInput>
    connect?: Enumerable<rangeTaxationWhereUniqueInput>
    update?: Enumerable<rangeTaxationUpdateWithWhereUniqueWithoutRangeInput>
    updateMany?: Enumerable<rangeTaxationUpdateManyWithWhereWithoutRangeInput>
    deleteMany?: Enumerable<rangeTaxationScalarWhereInput>
  }

  export type typeRangeUncheckedUpdateManyWithoutRangeNestedInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutRangeInput>, Enumerable<typeRangeUncheckedCreateWithoutRangeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutRangeInput>
    upsert?: Enumerable<typeRangeUpsertWithWhereUniqueWithoutRangeInput>
    createMany?: typeRangeCreateManyRangeInputEnvelope
    set?: Enumerable<typeRangeWhereUniqueInput>
    disconnect?: Enumerable<typeRangeWhereUniqueInput>
    delete?: Enumerable<typeRangeWhereUniqueInput>
    connect?: Enumerable<typeRangeWhereUniqueInput>
    update?: Enumerable<typeRangeUpdateWithWhereUniqueWithoutRangeInput>
    updateMany?: Enumerable<typeRangeUpdateManyWithWhereWithoutRangeInput>
    deleteMany?: Enumerable<typeRangeScalarWhereInput>
  }

  export type typeRangeCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutTypeInput>, Enumerable<typeRangeUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutTypeInput>
    createMany?: typeRangeCreateManyTypeInputEnvelope
    connect?: Enumerable<typeRangeWhereUniqueInput>
  }

  export type typeRangeUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutTypeInput>, Enumerable<typeRangeUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutTypeInput>
    createMany?: typeRangeCreateManyTypeInputEnvelope
    connect?: Enumerable<typeRangeWhereUniqueInput>
  }

  export type typeRangeUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutTypeInput>, Enumerable<typeRangeUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<typeRangeUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: typeRangeCreateManyTypeInputEnvelope
    set?: Enumerable<typeRangeWhereUniqueInput>
    disconnect?: Enumerable<typeRangeWhereUniqueInput>
    delete?: Enumerable<typeRangeWhereUniqueInput>
    connect?: Enumerable<typeRangeWhereUniqueInput>
    update?: Enumerable<typeRangeUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<typeRangeUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<typeRangeScalarWhereInput>
  }

  export type typeRangeUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<typeRangeCreateWithoutTypeInput>, Enumerable<typeRangeUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<typeRangeCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<typeRangeUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: typeRangeCreateManyTypeInputEnvelope
    set?: Enumerable<typeRangeWhereUniqueInput>
    disconnect?: Enumerable<typeRangeWhereUniqueInput>
    delete?: Enumerable<typeRangeWhereUniqueInput>
    connect?: Enumerable<typeRangeWhereUniqueInput>
    update?: Enumerable<typeRangeUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<typeRangeUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<typeRangeScalarWhereInput>
  }

  export type rangeCreateNestedOneWithoutRangeTaxationInput = {
    create?: XOR<rangeCreateWithoutRangeTaxationInput, rangeUncheckedCreateWithoutRangeTaxationInput>
    connectOrCreate?: rangeCreateOrConnectWithoutRangeTaxationInput
    connect?: rangeWhereUniqueInput
  }

  export type taxationCreateNestedOneWithoutRangeTaxationInput = {
    create?: XOR<taxationCreateWithoutRangeTaxationInput, taxationUncheckedCreateWithoutRangeTaxationInput>
    connectOrCreate?: taxationCreateOrConnectWithoutRangeTaxationInput
    connect?: taxationWhereUniqueInput
  }

  export type rangeUpdateOneRequiredWithoutRangeTaxationNestedInput = {
    create?: XOR<rangeCreateWithoutRangeTaxationInput, rangeUncheckedCreateWithoutRangeTaxationInput>
    connectOrCreate?: rangeCreateOrConnectWithoutRangeTaxationInput
    upsert?: rangeUpsertWithoutRangeTaxationInput
    connect?: rangeWhereUniqueInput
    update?: XOR<rangeUpdateWithoutRangeTaxationInput, rangeUncheckedUpdateWithoutRangeTaxationInput>
  }

  export type taxationUpdateOneRequiredWithoutRangeTaxationNestedInput = {
    create?: XOR<taxationCreateWithoutRangeTaxationInput, taxationUncheckedCreateWithoutRangeTaxationInput>
    connectOrCreate?: taxationCreateOrConnectWithoutRangeTaxationInput
    upsert?: taxationUpsertWithoutRangeTaxationInput
    connect?: taxationWhereUniqueInput
    update?: XOR<taxationUpdateWithoutRangeTaxationInput, taxationUncheckedUpdateWithoutRangeTaxationInput>
  }

  export type typeCreateNestedOneWithoutTypeRangeInput = {
    create?: XOR<typeCreateWithoutTypeRangeInput, typeUncheckedCreateWithoutTypeRangeInput>
    connectOrCreate?: typeCreateOrConnectWithoutTypeRangeInput
    connect?: typeWhereUniqueInput
  }

  export type rangeCreateNestedOneWithoutTypeRangeInput = {
    create?: XOR<rangeCreateWithoutTypeRangeInput, rangeUncheckedCreateWithoutTypeRangeInput>
    connectOrCreate?: rangeCreateOrConnectWithoutTypeRangeInput
    connect?: rangeWhereUniqueInput
  }

  export type typeUpdateOneRequiredWithoutTypeRangeNestedInput = {
    create?: XOR<typeCreateWithoutTypeRangeInput, typeUncheckedCreateWithoutTypeRangeInput>
    connectOrCreate?: typeCreateOrConnectWithoutTypeRangeInput
    upsert?: typeUpsertWithoutTypeRangeInput
    connect?: typeWhereUniqueInput
    update?: XOR<typeUpdateWithoutTypeRangeInput, typeUncheckedUpdateWithoutTypeRangeInput>
  }

  export type rangeUpdateOneRequiredWithoutTypeRangeNestedInput = {
    create?: XOR<rangeCreateWithoutTypeRangeInput, rangeUncheckedCreateWithoutTypeRangeInput>
    connectOrCreate?: rangeCreateOrConnectWithoutTypeRangeInput
    upsert?: rangeUpsertWithoutTypeRangeInput
    connect?: rangeWhereUniqueInput
    update?: XOR<rangeUpdateWithoutTypeRangeInput, rangeUncheckedUpdateWithoutTypeRangeInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type rangeTaxationCreateWithoutTaxationInput = {
    range: rangeCreateNestedOneWithoutRangeTaxationInput
  }

  export type rangeTaxationUncheckedCreateWithoutTaxationInput = {
    id?: number
    rangeId: number
  }

  export type rangeTaxationCreateOrConnectWithoutTaxationInput = {
    where: rangeTaxationWhereUniqueInput
    create: XOR<rangeTaxationCreateWithoutTaxationInput, rangeTaxationUncheckedCreateWithoutTaxationInput>
  }

  export type rangeTaxationCreateManyTaxationInputEnvelope = {
    data: Enumerable<rangeTaxationCreateManyTaxationInput>
    skipDuplicates?: boolean
  }

  export type rangeTaxationUpsertWithWhereUniqueWithoutTaxationInput = {
    where: rangeTaxationWhereUniqueInput
    update: XOR<rangeTaxationUpdateWithoutTaxationInput, rangeTaxationUncheckedUpdateWithoutTaxationInput>
    create: XOR<rangeTaxationCreateWithoutTaxationInput, rangeTaxationUncheckedCreateWithoutTaxationInput>
  }

  export type rangeTaxationUpdateWithWhereUniqueWithoutTaxationInput = {
    where: rangeTaxationWhereUniqueInput
    data: XOR<rangeTaxationUpdateWithoutTaxationInput, rangeTaxationUncheckedUpdateWithoutTaxationInput>
  }

  export type rangeTaxationUpdateManyWithWhereWithoutTaxationInput = {
    where: rangeTaxationScalarWhereInput
    data: XOR<rangeTaxationUpdateManyMutationInput, rangeTaxationUncheckedUpdateManyWithoutRangeTaxationInput>
  }

  export type rangeTaxationScalarWhereInput = {
    AND?: Enumerable<rangeTaxationScalarWhereInput>
    OR?: Enumerable<rangeTaxationScalarWhereInput>
    NOT?: Enumerable<rangeTaxationScalarWhereInput>
    id?: IntFilter | number
    rangeId?: IntFilter | number
    taxationId?: IntFilter | number
  }

  export type rangeTaxationCreateWithoutRangeInput = {
    taxation: taxationCreateNestedOneWithoutRangeTaxationInput
  }

  export type rangeTaxationUncheckedCreateWithoutRangeInput = {
    id?: number
    taxationId: number
  }

  export type rangeTaxationCreateOrConnectWithoutRangeInput = {
    where: rangeTaxationWhereUniqueInput
    create: XOR<rangeTaxationCreateWithoutRangeInput, rangeTaxationUncheckedCreateWithoutRangeInput>
  }

  export type rangeTaxationCreateManyRangeInputEnvelope = {
    data: Enumerable<rangeTaxationCreateManyRangeInput>
    skipDuplicates?: boolean
  }

  export type typeRangeCreateWithoutRangeInput = {
    type: typeCreateNestedOneWithoutTypeRangeInput
  }

  export type typeRangeUncheckedCreateWithoutRangeInput = {
    id?: number
    typeId: number
  }

  export type typeRangeCreateOrConnectWithoutRangeInput = {
    where: typeRangeWhereUniqueInput
    create: XOR<typeRangeCreateWithoutRangeInput, typeRangeUncheckedCreateWithoutRangeInput>
  }

  export type typeRangeCreateManyRangeInputEnvelope = {
    data: Enumerable<typeRangeCreateManyRangeInput>
    skipDuplicates?: boolean
  }

  export type rangeTaxationUpsertWithWhereUniqueWithoutRangeInput = {
    where: rangeTaxationWhereUniqueInput
    update: XOR<rangeTaxationUpdateWithoutRangeInput, rangeTaxationUncheckedUpdateWithoutRangeInput>
    create: XOR<rangeTaxationCreateWithoutRangeInput, rangeTaxationUncheckedCreateWithoutRangeInput>
  }

  export type rangeTaxationUpdateWithWhereUniqueWithoutRangeInput = {
    where: rangeTaxationWhereUniqueInput
    data: XOR<rangeTaxationUpdateWithoutRangeInput, rangeTaxationUncheckedUpdateWithoutRangeInput>
  }

  export type rangeTaxationUpdateManyWithWhereWithoutRangeInput = {
    where: rangeTaxationScalarWhereInput
    data: XOR<rangeTaxationUpdateManyMutationInput, rangeTaxationUncheckedUpdateManyWithoutRangeTaxationInput>
  }

  export type typeRangeUpsertWithWhereUniqueWithoutRangeInput = {
    where: typeRangeWhereUniqueInput
    update: XOR<typeRangeUpdateWithoutRangeInput, typeRangeUncheckedUpdateWithoutRangeInput>
    create: XOR<typeRangeCreateWithoutRangeInput, typeRangeUncheckedCreateWithoutRangeInput>
  }

  export type typeRangeUpdateWithWhereUniqueWithoutRangeInput = {
    where: typeRangeWhereUniqueInput
    data: XOR<typeRangeUpdateWithoutRangeInput, typeRangeUncheckedUpdateWithoutRangeInput>
  }

  export type typeRangeUpdateManyWithWhereWithoutRangeInput = {
    where: typeRangeScalarWhereInput
    data: XOR<typeRangeUpdateManyMutationInput, typeRangeUncheckedUpdateManyWithoutTypeRangeInput>
  }

  export type typeRangeScalarWhereInput = {
    AND?: Enumerable<typeRangeScalarWhereInput>
    OR?: Enumerable<typeRangeScalarWhereInput>
    NOT?: Enumerable<typeRangeScalarWhereInput>
    id?: IntFilter | number
    typeId?: IntFilter | number
    rangeId?: IntFilter | number
  }

  export type typeRangeCreateWithoutTypeInput = {
    range: rangeCreateNestedOneWithoutTypeRangeInput
  }

  export type typeRangeUncheckedCreateWithoutTypeInput = {
    id?: number
    rangeId: number
  }

  export type typeRangeCreateOrConnectWithoutTypeInput = {
    where: typeRangeWhereUniqueInput
    create: XOR<typeRangeCreateWithoutTypeInput, typeRangeUncheckedCreateWithoutTypeInput>
  }

  export type typeRangeCreateManyTypeInputEnvelope = {
    data: Enumerable<typeRangeCreateManyTypeInput>
    skipDuplicates?: boolean
  }

  export type typeRangeUpsertWithWhereUniqueWithoutTypeInput = {
    where: typeRangeWhereUniqueInput
    update: XOR<typeRangeUpdateWithoutTypeInput, typeRangeUncheckedUpdateWithoutTypeInput>
    create: XOR<typeRangeCreateWithoutTypeInput, typeRangeUncheckedCreateWithoutTypeInput>
  }

  export type typeRangeUpdateWithWhereUniqueWithoutTypeInput = {
    where: typeRangeWhereUniqueInput
    data: XOR<typeRangeUpdateWithoutTypeInput, typeRangeUncheckedUpdateWithoutTypeInput>
  }

  export type typeRangeUpdateManyWithWhereWithoutTypeInput = {
    where: typeRangeScalarWhereInput
    data: XOR<typeRangeUpdateManyMutationInput, typeRangeUncheckedUpdateManyWithoutTypeRangeInput>
  }

  export type rangeCreateWithoutRangeTaxationInput = {
    name: string
    description: string
    typeRange?: typeRangeCreateNestedManyWithoutRangeInput
  }

  export type rangeUncheckedCreateWithoutRangeTaxationInput = {
    id?: number
    name: string
    description: string
    typeRange?: typeRangeUncheckedCreateNestedManyWithoutRangeInput
  }

  export type rangeCreateOrConnectWithoutRangeTaxationInput = {
    where: rangeWhereUniqueInput
    create: XOR<rangeCreateWithoutRangeTaxationInput, rangeUncheckedCreateWithoutRangeTaxationInput>
  }

  export type taxationCreateWithoutRangeTaxationInput = {
    name: string
    value: number
    isPercentage: boolean
    isDividedOneHundred: boolean
  }

  export type taxationUncheckedCreateWithoutRangeTaxationInput = {
    id?: number
    name: string
    value: number
    isPercentage: boolean
    isDividedOneHundred: boolean
  }

  export type taxationCreateOrConnectWithoutRangeTaxationInput = {
    where: taxationWhereUniqueInput
    create: XOR<taxationCreateWithoutRangeTaxationInput, taxationUncheckedCreateWithoutRangeTaxationInput>
  }

  export type rangeUpsertWithoutRangeTaxationInput = {
    update: XOR<rangeUpdateWithoutRangeTaxationInput, rangeUncheckedUpdateWithoutRangeTaxationInput>
    create: XOR<rangeCreateWithoutRangeTaxationInput, rangeUncheckedCreateWithoutRangeTaxationInput>
  }

  export type rangeUpdateWithoutRangeTaxationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeRange?: typeRangeUpdateManyWithoutRangeNestedInput
  }

  export type rangeUncheckedUpdateWithoutRangeTaxationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    typeRange?: typeRangeUncheckedUpdateManyWithoutRangeNestedInput
  }

  export type taxationUpsertWithoutRangeTaxationInput = {
    update: XOR<taxationUpdateWithoutRangeTaxationInput, taxationUncheckedUpdateWithoutRangeTaxationInput>
    create: XOR<taxationCreateWithoutRangeTaxationInput, taxationUncheckedCreateWithoutRangeTaxationInput>
  }

  export type taxationUpdateWithoutRangeTaxationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    isDividedOneHundred?: BoolFieldUpdateOperationsInput | boolean
  }

  export type taxationUncheckedUpdateWithoutRangeTaxationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    isPercentage?: BoolFieldUpdateOperationsInput | boolean
    isDividedOneHundred?: BoolFieldUpdateOperationsInput | boolean
  }

  export type typeCreateWithoutTypeRangeInput = {
    name: string
    description: string
  }

  export type typeUncheckedCreateWithoutTypeRangeInput = {
    id?: number
    name: string
    description: string
  }

  export type typeCreateOrConnectWithoutTypeRangeInput = {
    where: typeWhereUniqueInput
    create: XOR<typeCreateWithoutTypeRangeInput, typeUncheckedCreateWithoutTypeRangeInput>
  }

  export type rangeCreateWithoutTypeRangeInput = {
    name: string
    description: string
    rangeTaxation?: rangeTaxationCreateNestedManyWithoutRangeInput
  }

  export type rangeUncheckedCreateWithoutTypeRangeInput = {
    id?: number
    name: string
    description: string
    rangeTaxation?: rangeTaxationUncheckedCreateNestedManyWithoutRangeInput
  }

  export type rangeCreateOrConnectWithoutTypeRangeInput = {
    where: rangeWhereUniqueInput
    create: XOR<rangeCreateWithoutTypeRangeInput, rangeUncheckedCreateWithoutTypeRangeInput>
  }

  export type typeUpsertWithoutTypeRangeInput = {
    update: XOR<typeUpdateWithoutTypeRangeInput, typeUncheckedUpdateWithoutTypeRangeInput>
    create: XOR<typeCreateWithoutTypeRangeInput, typeUncheckedCreateWithoutTypeRangeInput>
  }

  export type typeUpdateWithoutTypeRangeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type typeUncheckedUpdateWithoutTypeRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type rangeUpsertWithoutTypeRangeInput = {
    update: XOR<rangeUpdateWithoutTypeRangeInput, rangeUncheckedUpdateWithoutTypeRangeInput>
    create: XOR<rangeCreateWithoutTypeRangeInput, rangeUncheckedCreateWithoutTypeRangeInput>
  }

  export type rangeUpdateWithoutTypeRangeInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rangeTaxation?: rangeTaxationUpdateManyWithoutRangeNestedInput
  }

  export type rangeUncheckedUpdateWithoutTypeRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rangeTaxation?: rangeTaxationUncheckedUpdateManyWithoutRangeNestedInput
  }

  export type rangeTaxationCreateManyTaxationInput = {
    id?: number
    rangeId: number
  }

  export type rangeTaxationUpdateWithoutTaxationInput = {
    range?: rangeUpdateOneRequiredWithoutRangeTaxationNestedInput
  }

  export type rangeTaxationUncheckedUpdateWithoutTaxationInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
  }

  export type rangeTaxationUncheckedUpdateManyWithoutRangeTaxationInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
  }

  export type rangeTaxationCreateManyRangeInput = {
    id?: number
    taxationId: number
  }

  export type typeRangeCreateManyRangeInput = {
    id?: number
    typeId: number
  }

  export type rangeTaxationUpdateWithoutRangeInput = {
    taxation?: taxationUpdateOneRequiredWithoutRangeTaxationNestedInput
  }

  export type rangeTaxationUncheckedUpdateWithoutRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    taxationId?: IntFieldUpdateOperationsInput | number
  }

  export type typeRangeUpdateWithoutRangeInput = {
    type?: typeUpdateOneRequiredWithoutTypeRangeNestedInput
  }

  export type typeRangeUncheckedUpdateWithoutRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type typeRangeUncheckedUpdateManyWithoutTypeRangeInput = {
    id?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type typeRangeCreateManyTypeInput = {
    id?: number
    rangeId: number
  }

  export type typeRangeUpdateWithoutTypeInput = {
    range?: rangeUpdateOneRequiredWithoutTypeRangeNestedInput
  }

  export type typeRangeUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    rangeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}