#!/bin/sh
# Turbinia Kubernetes destroy script for a minikube local instance.
# This script can be used to destroy the Turbinia infrastructure in minikube.

kubectl delete configmap turbinia-config
kubectl delete -f redis-server.yaml
kubectl delete -f redis-service.yaml
kubectl delete -f turbinia-autoscale-cpu.yaml 
kubectl delete -f turbinia-server-metrics-service.yaml 
kubectl delete -f turbinia-worker-metrics-service.yaml 
kubectl delete -f turbinia-worker.yaml 
kubectl delete -f turbinia-server.yaml
kubectl delete -f turbinia-volume-claim-minikube.yaml
kubectl delete -f turbinia-volume-minikube.yaml