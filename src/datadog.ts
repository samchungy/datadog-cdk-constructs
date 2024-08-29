import { DatadogLambda } from "./datadog-lambda";

/**
 * For backward compatibility. It's recommended to use DatadogLambda for
 * users who want to add Datadog monitoring for Lambda functions.
 */
export class Datadog extends DatadogLambda {}
