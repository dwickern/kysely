export type OperationNodeKind =
  | 'IdentifierNode'
  | 'SchemableIdentifierNode'
  | 'RawNode'
  | 'SelectQueryNode'
  | 'SelectionNode'
  | 'ReferenceNode'
  | 'ColumnNode'
  | 'TableNode'
  | 'AliasNode'
  | 'FromNode'
  | 'SelectAllNode'
  | 'AndNode'
  | 'OrNode'
  | 'ParensNode'
  | 'ValueNode'
  | 'ValueListNode'
  | 'PrimitiveValueListNode'
  | 'JoinNode'
  | 'JoinUsingNode'
  | 'OperatorNode'
  | 'WhereNode'
  | 'InsertQueryNode'
  | 'DeleteQueryNode'
  | 'ReturningNode'
  | 'CreateTableNode'
  | 'ColumnDefinitionNode'
  | 'AddColumnNode'
  | 'DropTableNode'
  | 'DataTypeNode'
  | 'OrderByNode'
  | 'OrderByItemNode'
  | 'GroupByNode'
  | 'GroupByItemNode'
  | 'UpdateQueryNode'
  | 'ColumnUpdateNode'
  | 'LimitNode'
  | 'OffsetNode'
  | 'OnConflictNode'
  | 'OnDuplicateKeyNode'
  | 'CreateIndexNode'
  | 'DropIndexNode'
  | 'ListNode'
  | 'ReferencesNode'
  | 'PrimaryKeyConstraintNode'
  | 'UniqueConstraintNode'
  | 'CheckConstraintNode'
  | 'ForeignKeyConstraintNode'
  | 'WithNode'
  | 'CommonTableExpressionNode'
  | 'HavingNode'
  | 'CreateSchemaNode'
  | 'DropSchemaNode'
  | 'AlterTableNode'
  | 'ModifyColumnNode'
  | 'DropColumnNode'
  | 'RenameColumnNode'
  | 'AlterColumnNode'
  | 'AddConstraintNode'
  | 'DropConstraintNode'
  | 'CreateViewNode'
  | 'DropViewNode'
  | 'GeneratedNode'
  | 'DefaultValueNode'
  | 'OnNode'
  | 'ValuesNode'
  | 'CommonTableExpressionNameNode'
  | 'SelectModifierNode'
  | 'CreateTypeNode'
  | 'DropTypeNode'
  | 'ExplainNode'
  | 'DefaultInsertValueNode'
  | 'AggregateFunctionNode'
  | 'OverNode'
  | 'PartitionByNode'
  | 'PartitionByItemNode'
  | 'SetOperationNode'
  | 'BinaryOperationNode'
  | 'UnaryOperationNode'
  | 'UsingNode'
  | 'FunctionNode'
  | 'CaseNode'
  | 'WhenNode'
  | 'JSONReferenceNode'
  | 'JSONPathNode'
  | 'JSONPathLegNode'
  | 'JSONOperatorChainNode'
  | 'TupleNode'
  | 'MergeQueryNode'
  | 'MatchedNode'
  | 'AddIndexNode'
  | 'CastNode'

export interface OperationNode {
  readonly kind: OperationNodeKind
}
