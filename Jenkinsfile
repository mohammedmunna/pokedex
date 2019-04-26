pipeline {
  agent any
  stages {
    stage('Docker image') {
      steps {
        sh 'docker build -t demo .'
      }
    }
    stage('Run docker') {
      steps {
        sh 'docker run --name=demo -d -t -p 3000:3000 demo'
      }
    }
  }
}