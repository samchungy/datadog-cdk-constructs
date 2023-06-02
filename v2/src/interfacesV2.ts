/*
 * Unless explicitly stated otherwise all files in this repository are licensed
 * under the Apache License Version 2.0.
 *
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2021 Datadog, Inc.
 */

import * as secrets from "aws-cdk-lib/aws-secretsmanager";

export interface DatadogPropsV2 {
  readonly pythonLayerVersion?: number;
  readonly nodeLayerVersion?: number;
  readonly javaLayerVersion?: number;
  readonly extensionLayerVersion?: number;
  readonly addLayers?: boolean;
  readonly forwarderArn?: string;
  readonly flushMetricsToLogs?: boolean;
  readonly site?: string;
  readonly apiKey?: string;
  readonly apiKeySecretArn?: string;
  readonly apiKeySecret?: secrets.ISecret;
  readonly apiKmsKey?: string;
  readonly enableDatadogTracing?: boolean;
  readonly enableMergeXrayTraces?: boolean;
  readonly injectLogContext?: boolean;
  readonly logLevel?: string;
  readonly enableDatadogLogs?: boolean;
  readonly captureLambdaPayload?: boolean;
  readonly env?: string;
  readonly service?: string;
  readonly version?: string;
  readonly tags?: string;
  readonly createForwarderPermissions?: boolean;
  readonly sourceCodeIntegration?: boolean;
  readonly enableColdStartTracing?: boolean;
  readonly minColdStartTraceDuration?: number;
  readonly coldStartTraceSkipLibs?: string;
  readonly enableProfiling?: boolean;
  readonly encodeAuthorizerContext?: boolean;
  readonly decodeAuthorizerContext?: boolean;
  readonly apmFlushDeadline?: string | number;
  readonly redirectHandler?: boolean;
}