class simple_knn():
    def __init__(self):
        pass
    def train(self,X,y):
        self.X_train = X
        self.y_train = y

        def distance(self,instance1,instance2):
    instance1 = np.array(instance1)
    instance2 = np.array(instance2)  
    return np.linalg.norm(instance1-instance2)  

    def get_neighbors(self,k,test_instance):
    distances = []
    for index in range(len(self.X_train.shape[0]):
        dist = self.distance(test_instance,self.X_train[index])
        distances.append((self.X_train[index],dist,self.y_train[index])
    distances.sort(key=lambda x: x[1])
    neighbors = distances[:k]
    return neighbors

    def vote(self,neighbors):
    class_counter = Counter()
    for neighbor in neighbors:
        class_counter[neighbor[2]] += 1
    return class_counter.most_common(1)[0][0]

    from sklearn import datasets
    iris = datasets.load_iris()