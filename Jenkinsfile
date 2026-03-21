
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
    

    

    stage('Deploy via Ansible Server') {
    steps {
        sh '''
ssh thakshala@192.168.43.34 << 'ENDSSH'
REPO_DIR=~/Deploypreoject

rm -rf "$REPO_DIR"
git clone git@github.com:ThakshalaMadhuwanthi/DeployPreoject.git "$REPO_DIR"
cd "$REPO_DIR"
git fetch origin main
git reset --hard origin/main
ansible-playbook -i Ansible/inventory Ansible/configure.yml
ENDSSH
'''
    }
}


}





}



