environment {
    DOCKER_HOST = "tcp://docker-dind:2375"
}

pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.0-noble'
        }
    }
    stages {
        stage('Check npm') {
            steps {
                sh 'npm -v'
            }
        }
        // ... your other stages ...
    }
}