import multer from "multer";
import multerS3 from "multer-s3";

import aws from "aws-sdk";

import {
  AWS_ACCESS_KEY,
  AWS_BUCKET_NAME,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
} from "./server-config.js";

aws.config.update({
  region: AWS_REGION,
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
});

const s3 = new aws.S3();

export const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: AWS_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
