pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.0-noble'
            args '-u root'
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

        stage('Installing npm ci with dependencies...') {
            steps {
                sh '''
                    # Install NPM packages
                    npm ci

                    # Install Playwright browsers and dependencies
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Run test...'){
            steps {
                sh'''
                npx playwright test --reporter=html
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
