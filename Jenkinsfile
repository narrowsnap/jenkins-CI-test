pipeline {
  agent {
    docker {
      image 'node:carbon'
    }

  }
  stages {
    stage('Initialize') {
      steps {
        echo 'jenkins test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}