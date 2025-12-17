pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build ran"'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  echo "DEPLOY STAGE EXECUTED"
                  mkdir -p /tmp/ci-cd-lab
                  echo "deployed at $(date)" > /tmp/ci-cd-lab/deploy.txt
                '''
            }
        }
    }
}

