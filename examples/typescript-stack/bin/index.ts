#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { CdkTypeScriptStack } from "../lib/cdk-typescript-stack";
import { CdkTypeScriptOldApiStack } from "../lib/cdk-typescript-old-api-stack";

const app = new cdk.App();
new CdkTypeScriptStack(app, "CdkTypeScriptStack", {});
new CdkTypeScriptOldApiStack(app, "CdkTypeScriptOldApiStack", {});
app.synth();
