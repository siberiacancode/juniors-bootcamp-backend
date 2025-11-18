pipeline {
    agent any
    environment {
        GITHUB_TOKEN=credentials('github-container')
        IP=credentials('yandex-apps-ip')

        IMAGE_NAME='siberiacancode/juniors-bootcamp-backend'
        IMAGE_VERSION='latest'

        DATABASE_USERNAME=credentials('database-username')
        DATABASE_PASSWORD=credentials('database-password')
        DATABASE_PORT='27018'
        DATABASE_NAME='juniors-bootcamp'
        
        JWT_SECRET=credentials('jwt-secret')
        PORT='3003'
        SERVER_URL='https://juniors-bootcamp.ru/'
        
        NETWORK_NAME='juniors-bootcamp'
        VOLUME_NAME='juniors-bootcamp-data'
        CONTAINER_DB_NAME='juniors-bootcamp-database'
        CONTAINER_SERVICE_NAME='juniors-bootcamp-service'
    }
    stages {
        stage('cleanup') {
            steps {
                sh 'docker system prune -a --volumes --force'
            }
        }
        stage('build image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$IMAGE_VERSION .'
            }
        }
        stage('login to GHCR') {
            steps {
                sh 'echo $GITHUB_TOKEN_PSW | docker login ghcr.io -u $GITHUB_TOKEN_USR --password-stdin'
            }
        }
        stage('tag image') {
            steps {
                sh 'docker tag $IMAGE_NAME:$IMAGE_VERSION ghcr.io/$IMAGE_NAME:$IMAGE_VERSION'
            }
        }
        stage('push image') {
            steps {
                sh 'docker push ghcr.io/$IMAGE_NAME:$IMAGE_VERSION'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}