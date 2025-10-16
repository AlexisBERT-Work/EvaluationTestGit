# Évaluation – Git, GitHub, CI
Alexis BERT , Yassin EL ALAOUI

# Les différences : 
switch/checkout = 
        - La commande git checkout permet de changer de branche et de mettre à jour les fichiers du répertoire de travail.
        - La commande git switch permet de passer d'une branche à l'autre.

pull/fetch = 
        - git fetch permet de récupérer les modifications présentes sur un serveur distant qu'on à pas encore.
        - git pull met à jour la branche actuelle en fusionnant les changements de sa version sur le serveur distant. Cela ne concerne que la branche sur laquelle on se trouve.

rebase/revert = 
        - git rebase permet de déplacer une branche pour qu’elle parte d’un autre commit, comme si on l’avait créée à partir de celui-ci.
        - git revert permet d'annuler des changements de commit.


# Description des commandes :
tag = C'est une étiquette fixe qui est attachée à un commit, elle va signaler des versions clés d’un projet.

stash = Cette commande va mettre de côté temporairement les modifications en cours dans un espace de travail afin de pouvoir travailler sur d'autres tâches puis de récupérer ces changements plus tard.

release = C'est la version stable d'un projet


# url github : https://github.com/AlexisBERT-Work/EvaluationTestGit

# url pull-requests(3):
        - https://github.com/AlexisBERT-Work/EvaluationTestGit/pull/1
        - https://github.com/AlexisBERT-Work/EvaluationTestGit/pull/2
        - https://github.com/AlexisBERT-Work/EvaluationTestGit/pull/3


# url request avec soucis de merge : 
        - https://github.com/AlexisBERT-Work/EvaluationTestGit/pull/2


# description courte :
    - petite application qui permet a un utilisateur de gérer ses tâches :
        - ajoute des nouvelles tâches
        - un compteur de tache en cours
        - et la gestion de leurs complétions.

# commandes utilisées :
    - npm install
    - npm run test
    - tout a été effectuer via gitKraken ou github sans commandes de terminal