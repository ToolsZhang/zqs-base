import { Model, Schema } from 'zqs-core/lib/db';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: String,
  },
  { timestamps: {} }
);

export default Model({
  name: 'sample',
  auth: false,
  schema,
});
