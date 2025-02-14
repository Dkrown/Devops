pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.50.1-jammy'  // Replace with your desired Playwright image
            args '-u root' // or 'user abc:abc' if you need a specific user
        }
    }

    stages {
        stage('eKROWN Technologies Lab') {
            steps {
                sh '''
                    echo 'Hello, from eKROWN Engineers!'
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci 
                    npx playwright install-deps
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                    npx playwright test
                '''
            }
        }
    }

    post {
        always {
            echo 'Publishing HTML Report'
            publishHTML(target: [
                allowMissing         : false,
                alwaysLinkToLastBuild: false,
                keepAll             : true,
                reportDir            : 'playwright-report',
                reportFiles          : 'index.html',
                reportName           : 'Playwright Test Report'
            ])
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}