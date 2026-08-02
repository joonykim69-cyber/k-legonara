// 브라우저 검증에 사용할 최소 큐브 GLB 자산을 결정론적으로 생성합니다.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(scriptDirectory, "../public/fixtures/neo-assembly.glb");

const positions = new Float32Array([
  -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
  1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1,
  -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1,
  -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1,
  1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1,
  -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1,
]);

const normals = new Float32Array([
  0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
  0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
  1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
  -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
]);

const indices = new Uint16Array([
  0, 1, 2, 0, 2, 3,
  4, 5, 6, 4, 6, 7,
  8, 9, 10, 8, 10, 11,
  12, 13, 14, 12, 14, 15,
  16, 17, 18, 16, 18, 19,
  20, 21, 22, 20, 22, 23,
]);

const binary = Buffer.concat([
  Buffer.from(positions.buffer),
  Buffer.from(normals.buffer),
  Buffer.from(indices.buffer),
]);

const gltf = {
  asset: { version: "2.0", generator: "K-Legonara Fixture Generator" },
  scene: 0,
  scenes: [{ nodes: [0] }],
  nodes: [{ mesh: 0, name: "Neo Assembly Module" }],
  meshes: [
    {
      name: "Neo Assembly Module",
      primitives: [
        {
          attributes: { POSITION: 0, NORMAL: 1 },
          indices: 2,
          material: 0,
        },
      ],
    },
  ],
  materials: [
    {
      name: "Neo Aqua Composite",
      pbrMetallicRoughness: {
        baseColorFactor: [0.133, 0.78, 0.72, 1],
        metallicFactor: 0.15,
        roughnessFactor: 0.35,
      },
      doubleSided: true,
    },
  ],
  buffers: [{ byteLength: binary.length }],
  bufferViews: [
    { buffer: 0, byteOffset: 0, byteLength: positions.byteLength, target: 34962 },
    {
      buffer: 0,
      byteOffset: positions.byteLength,
      byteLength: normals.byteLength,
      target: 34962,
    },
    {
      buffer: 0,
      byteOffset: positions.byteLength + normals.byteLength,
      byteLength: indices.byteLength,
      target: 34963,
    },
  ],
  accessors: [
    {
      bufferView: 0,
      componentType: 5126,
      count: 24,
      type: "VEC3",
      min: [-1, -1, -1],
      max: [1, 1, 1],
    },
    { bufferView: 1, componentType: 5126, count: 24, type: "VEC3" },
    { bufferView: 2, componentType: 5123, count: 36, type: "SCALAR" },
  ],
};

const rawJson = Buffer.from(JSON.stringify(gltf), "utf8");
const jsonPadding = (4 - (rawJson.length % 4)) % 4;
const jsonChunk = Buffer.concat([rawJson, Buffer.alloc(jsonPadding, 0x20)]);
const binaryPadding = (4 - (binary.length % 4)) % 4;
const binaryChunk = Buffer.concat([binary, Buffer.alloc(binaryPadding)]);
const totalLength = 12 + 8 + jsonChunk.length + 8 + binaryChunk.length;

const header = Buffer.alloc(12);
header.writeUInt32LE(0x46546c67, 0);
header.writeUInt32LE(2, 4);
header.writeUInt32LE(totalLength, 8);

const jsonHeader = Buffer.alloc(8);
jsonHeader.writeUInt32LE(jsonChunk.length, 0);
jsonHeader.writeUInt32LE(0x4e4f534a, 4);

const binaryHeader = Buffer.alloc(8);
binaryHeader.writeUInt32LE(binaryChunk.length, 0);
binaryHeader.writeUInt32LE(0x004e4942, 4);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  Buffer.concat([header, jsonHeader, jsonChunk, binaryHeader, binaryChunk]),
);

console.log(`Generated ${outputPath} (${totalLength} bytes)`);
