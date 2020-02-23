# k8s-hint

Термины:
1. Под - изолированная машина с процессами
2. Контроллер репликации - сервис, который следит, чтобы все машины были подняты
3. Неймспейс - изолирует поды
4. РепликаСет типо контроллера репликации, только с метками лучше работает

minikube start
minikube stop

minikube service kubia-http - получить внушний ип адрес сервиса

kubectl cluster-info - инфомрация о кластере

kubectl run kubia --image=xcorter/kubia --port=8081 --generator=run/v1 // деплой контейнера в кластер, шарим порт 8081, генератор=run/v1 создает Репликейшн контроллер. Контроллер релпикации управляет количеством запущенных под.
kubectl run --generator=run/v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.


kubectl describe pods - получить инфу о подах/модулях

kubectl expose rc kubia --type=LoadBalancer --name kubia-http // пробрасываем айпишник из кластера во вне, создаем службу LoadBalancer


kubectl get services - список запущенных служб, там можно взять айпишник для доступа в контейнер

kubectl get replicationcontrollers - посмотреть 

kubectl scale rc kubia --replicas=3 // увеличиваем количество реплик до трех


kubectl port-forward kubia-manual 8888:8081 // прокинуть порт во вне


kubectl create -f kubia-manual-with-lables.yaml // создать из файла

### МЕТКИЁ!!!!!!
 kubectl get pods --show-labels // показать метки
kubectl label po kubia-manual creation_method=manual // создать метку
 kubectl label po kubia-manual-v2 env=debug --overwrite // изменить метку


 kubectl get po -l creation_method=manual // вывод всех подов с метками creation_method=manual
 kubectl get po -l env
 kubectl get po -l '!env'



 #NAMESPACE
 kubectl get ns
 kubectl create -f kubia-manual.yaml -n custom-namespace - создать в неймспейсе
 kubectl get po --namespace kube-syste


 #DELETE
 kubectl delete pods -l label=value
 kubectl delete ns custom-namespace
$ kubectl delete all --all - удалить все в неймспейсе


# Replication controller
kubectl edit rc kubia // редактирование
# Удалить репликейшн контроллер
kubectl delete rc kubia // cascade=false, чтобы не удалять поды

# Replica set
kubectl describe rs
kubectl get rs
kubectl delete rs kubia