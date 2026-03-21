
pipeline{

agent any

triggers{
    githubPush()
}

stages{
    stage('gitclone'){
        steps{

           git branch: 'main',
           credentialsId: 'git',
           url: 'git@github.com:ThakshalaMadhuwanthi/DeployPreoject.git'
        }
    }
    

    stage('sshtoansibleserver'){
        sh 'ssh thakshala@192.168.43.34'
    }

    stage('Deploy via Ansible Server') {
    steps {
        sh '''
        ssh thakshala@192.168.43.34 "
            if [ ! -d ~/DeployPreoject ]; then
                git clone git@github.com:ThakshalaMadhuwanthi/DeployPreoject.git ~/DeployPreoject
            fi &&
            cd ~/DeployPreoject &&
            git pull origin main &&
            ansible-playbook -i Ansible/inventory Ansible/configure.yml
        "
        '''
    }
}


}





}



