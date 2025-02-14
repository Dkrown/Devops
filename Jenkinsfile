pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.0-noble'
        }
    }

    stages {
        stage('Hello, from eKROWN!') {
            steps {
                sh '''
                    echo 'eKROWN Devops-Engineers Lab.'
                '''
            }
        }

        stage('Installing npm ci...') {
            steps {
                sh '''
                    # Install NPM packages
                    npm ci

                    # Install Playwright browsers and dependencies
                    npx playwright install --with-deps

                    # Run a test
                    npx playwright test
                '''
            }
        }
    }
    post {
        always {
            /*junit 'jest-results/junit.xml'*/
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
