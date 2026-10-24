import assert from 'node:assert/strict';
import { sourceConnectorToMatrix, matrixSummary, toDocument } from '@x12i/memorix-io-matrix';
const connector = { identity: { id: 'fixture-connector', displayName: 'Example inventory' },
  operations: [{ id: 'assets.list', name: 'List assets', response: { itemsPath: 'items', identityPath: 'id' } }],
  streams: [{ streamId: 'assets', objectType: 'asset', operationId: 'assets.list', identity: { path: 'id' }, itemSchema: { type: 'object', properties: { id: { type: 'string' }, name: { type: 'string' } } } }],
};
const matrix = sourceConnectorToMatrix(connector);
const summary = matrixSummary(matrix);
assert(summary.stepCount > 0);
assert(summary.objectTypeKeys.includes('asset'));
console.log({ document: toDocument(matrix), summary });
