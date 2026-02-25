from marshmallow import Schema, fields

class TecnicoSchema(Schema):
    id = fields.Int(dump_only=True)
    nome = fields.Str(required=True)

class ClienteSchema(Schema):
    id = fields.Int(dump_only=True)
    nome = fields.Str(required=True)
    plano = fields.Str(required=True)

class OrdemServicoSchema(Schema):
    id = fields.Int(dump_only=True)
    cliente_id = fields.Nested(ClienteSchema)
    tecnico_id = fields.Nested(TecnicoSchema)
    data_abertura = fields.DateTime(required=True)
    descricao = fields.Str(required=True)
    status = fields.Str(required=True)