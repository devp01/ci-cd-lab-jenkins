pipeline {
    agent any


    environment {
        APP_NAME = 'ci-cd-lab'
        DEPLOY_DIR = '/tmp/ci-cd-lab-jenkins'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm ci'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Debug Branch') {
           steps {
               sh '''
                echo "BRANCH_NAME=$BRANCH_NAME"
                echo "GIT_BRANCH=$GIT_BRANCH"
               '''
           }  
       }     
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                  echo "Deploying to server..."
                  mkdir -p /tmp/ci-cd-lab-jenkins
                  rm -rf /tmp/ci-cd-lab-jenkins/*
                  cp -r dist/* /tmp/ci-cd-lab-jenkins/
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}

