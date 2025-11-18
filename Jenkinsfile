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
        stage('deploy') {
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'yandex-apps-container', keyFileVariable: 'SSH_PRIVATE_KEY', usernameVariable: 'SSH_USERNAME')]) {
                    sh 'install -m 600 -D /dev/null ~/.ssh/id_rsa'
                    sh 'rm ~/.ssh/id_rsa'
                    sh 'cp -i $SSH_PRIVATE_KEY ~/.ssh/id_rsa'
                    
                    sh 'scp -o "StrictHostKeyChecking=no" docker-compose.yml $SSH_USERNAME@$IP:~/'
                    
                    sh 'ssh -o "StrictHostKeyChecking=no" $SSH_USERNAME@$IP \
                        "docker-compose down && \
                        env DATABASE_USERNAME=$DATABASE_USERNAME \
                        DATABASE_PASSWORD=$DATABASE_PASSWORD \
                        DATABASE_PORT=$DATABASE_PORT \
                        DATABASE_NAME=$DATABASE_NAME \
                        JWT_SECRET=$JWT_SECRET \
                        PORT=$PORT \
                        SERVER_URL=$SERVER_URL \
                        NETWORK_NAME=$NETWORK_NAME \
                        VOLUME_NAME=$VOLUME_NAME \
                        CONTAINER_DB_NAME=$CONTAINER_DB_NAME \
                        CONTAINER_SERVICE_NAME=$CONTAINER_SERVICE_NAME \
                        docker-compose up -d --build"'
                }
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}