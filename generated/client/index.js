
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.DinosaurScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RangeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});

exports.Prisma.RangeTaxationScalarFieldEnum = makeEnum({
  id: 'id',
  rangeId: 'rangeId',
  taxationId: 'taxationId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TaxationScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  value: 'value',
  isPercentage: 'isPercentage',
  isDividedOneHundred: 'isDividedOneHundred'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TypeRangeScalarFieldEnum = makeEnum({
  id: 'id',
  typeId: 'typeId',
  rangeId: 'rangeId'
});

exports.Prisma.TypeScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description'
});


exports.Prisma.ModelName = makeEnum({
  Dinosaur: 'Dinosaur',
  taxation: 'taxation',
  range: 'range',
  type: 'type',
  rangeTaxation: 'rangeTaxation',
  typeRange: 'typeRange'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Dinosaur\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"taxation\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPercentage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDividedOneHundred\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rangeTaxation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rangeTaxation\",\"relationName\":\"rangeTaxationTotaxation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"range\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rangeTaxation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rangeTaxation\",\"relationName\":\"rangeTorangeTaxation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeRange\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"typeRange\",\"relationName\":\"rangeTotypeRange\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"type\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeRange\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"typeRange\",\"relationName\":\"typeTotypeRange\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"rangeTaxation\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"range\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"range\",\"relationName\":\"rangeTorangeTaxation\",\"relationFromFields\":[\"rangeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rangeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"taxation\",\"relationName\":\"rangeTaxationTotaxation\",\"relationFromFields\":[\"taxationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"typeRange\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"type\",\"relationName\":\"typeTotypeRange\",\"relationFromFields\":[\"typeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"range\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"range\",\"relationName\":\"rangeTotypeRange\",\"relationFromFields\":[\"rangeId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rangeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Dinosaur\",\"plural\":\"dinosaurs\",\"findUnique\":\"findUniqueDinosaur\",\"findUniqueOrThrow\":\"findUniqueDinosaurOrThrow\",\"findFirst\":\"findFirstDinosaur\",\"findFirstOrThrow\":\"findFirstDinosaurOrThrow\",\"findMany\":\"findManyDinosaur\",\"create\":\"createOneDinosaur\",\"createMany\":\"createManyDinosaur\",\"delete\":\"deleteOneDinosaur\",\"update\":\"updateOneDinosaur\",\"deleteMany\":\"deleteManyDinosaur\",\"updateMany\":\"updateManyDinosaur\",\"upsert\":\"upsertOneDinosaur\",\"aggregate\":\"aggregateDinosaur\",\"groupBy\":\"groupByDinosaur\"},{\"model\":\"taxation\",\"plural\":\"taxations\",\"findUnique\":\"findUniquetaxation\",\"findUniqueOrThrow\":\"findUniquetaxationOrThrow\",\"findFirst\":\"findFirsttaxation\",\"findFirstOrThrow\":\"findFirsttaxationOrThrow\",\"findMany\":\"findManytaxation\",\"create\":\"createOnetaxation\",\"createMany\":\"createManytaxation\",\"delete\":\"deleteOnetaxation\",\"update\":\"updateOnetaxation\",\"deleteMany\":\"deleteManytaxation\",\"updateMany\":\"updateManytaxation\",\"upsert\":\"upsertOnetaxation\",\"aggregate\":\"aggregatetaxation\",\"groupBy\":\"groupBytaxation\"},{\"model\":\"range\",\"plural\":\"ranges\",\"findUnique\":\"findUniquerange\",\"findUniqueOrThrow\":\"findUniquerangeOrThrow\",\"findFirst\":\"findFirstrange\",\"findFirstOrThrow\":\"findFirstrangeOrThrow\",\"findMany\":\"findManyrange\",\"create\":\"createOnerange\",\"createMany\":\"createManyrange\",\"delete\":\"deleteOnerange\",\"update\":\"updateOnerange\",\"deleteMany\":\"deleteManyrange\",\"updateMany\":\"updateManyrange\",\"upsert\":\"upsertOnerange\",\"aggregate\":\"aggregaterange\",\"groupBy\":\"groupByrange\"},{\"model\":\"type\",\"plural\":\"types\",\"findUnique\":\"findUniquetype\",\"findUniqueOrThrow\":\"findUniquetypeOrThrow\",\"findFirst\":\"findFirsttype\",\"findFirstOrThrow\":\"findFirsttypeOrThrow\",\"findMany\":\"findManytype\",\"create\":\"createOnetype\",\"createMany\":\"createManytype\",\"delete\":\"deleteOnetype\",\"update\":\"updateOnetype\",\"deleteMany\":\"deleteManytype\",\"updateMany\":\"updateManytype\",\"upsert\":\"upsertOnetype\",\"aggregate\":\"aggregatetype\",\"groupBy\":\"groupBytype\"},{\"model\":\"rangeTaxation\",\"plural\":\"rangeTaxations\",\"findUnique\":\"findUniquerangeTaxation\",\"findUniqueOrThrow\":\"findUniquerangeTaxationOrThrow\",\"findFirst\":\"findFirstrangeTaxation\",\"findFirstOrThrow\":\"findFirstrangeTaxationOrThrow\",\"findMany\":\"findManyrangeTaxation\",\"create\":\"createOnerangeTaxation\",\"createMany\":\"createManyrangeTaxation\",\"delete\":\"deleteOnerangeTaxation\",\"update\":\"updateOnerangeTaxation\",\"deleteMany\":\"deleteManyrangeTaxation\",\"updateMany\":\"updateManyrangeTaxation\",\"upsert\":\"upsertOnerangeTaxation\",\"aggregate\":\"aggregaterangeTaxation\",\"groupBy\":\"groupByrangeTaxation\"},{\"model\":\"typeRange\",\"plural\":\"typeRanges\",\"findUnique\":\"findUniquetypeRange\",\"findUniqueOrThrow\":\"findUniquetypeRangeOrThrow\",\"findFirst\":\"findFirsttypeRange\",\"findFirstOrThrow\":\"findFirsttypeRangeOrThrow\",\"findMany\":\"findManytypeRange\",\"create\":\"createOnetypeRange\",\"createMany\":\"createManytypeRange\",\"delete\":\"deleteOnetypeRange\",\"update\":\"updateOnetypeRange\",\"deleteMany\":\"deleteManytypeRange\",\"updateMany\":\"updateManytypeRange\",\"upsert\":\"upsertOnetypeRange\",\"aggregate\":\"aggregatetypeRange\",\"groupBy\":\"groupBytypeRange\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/workspaces/tax_calculator/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.12.0",
  "engineVersion": "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "generated/client/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
