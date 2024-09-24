import { StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { CdkTypeScriptStackBase } from "./cdk-typescript-stack-base";
import { Datadog, DatadogProps } from "datadog-cdk-constructs-v2";

export class CdkTypeScriptOldApiStack extends CdkTypeScriptStackBase {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    console.log("Instrumenting Lambda Functions in TypeScript stack with Datadog");

    const datadogProps: DatadogProps = {
      dotnetLayerVersion: 15,
      nodeLayerVersion: 108,
      pythonLayerVersion: 89,
      extensionLayerVersion: 55,
      addLayers: true,
      apiKey: process.env.DD_API_KEY,
      enableDatadogTracing: true,
      enableDatadogASM: true,
      flushMetricsToLogs: true,
      site: "datadoghq.com",
    };
    const datadogLambda = new Datadog(this, "Datadog", datadogProps);

    datadogLambda.addLambdaFunctions(this.lambdaFunctions);
  }
}
