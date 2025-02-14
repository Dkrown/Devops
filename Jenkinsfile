pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.40.0-jammy'  // Replace with your desired Playwright image
            args '-u root' // or 'user abc:abc' if you need a specific user
        }
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install playwright'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test --reporter=html'
            }
        }

        stage('Publish Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true, onlyIfSuccessful: true
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
    }
}
