local deployment = import "../../releng/hugo-websites/kube-deployment.jsonnet";

deployment.newProductionDeploymentWithStaging(
  "iot.eclipse.org", "iot-staging.eclipse.org"
)