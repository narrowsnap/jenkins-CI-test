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
    stage('install') {
      steps {
        sh 'npm install'
      }
    }
  }
}