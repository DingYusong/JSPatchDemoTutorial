defineClass(
    'People',
    {
        eat: function () {
            self.ORIGeat();
            console.log('eat two times');
        },
    },
    {
        handsNumber: function () {
            return 2;
        }
    }
);
