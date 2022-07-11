const root = new Vue({
    name: 'My Vue',
    el: '#root',
    data: {
        firstName: '',
        lastName: '',
        age: '',
        cityOfBirth: '',
        myClass: 'bg-primary text-white fw-bold',
        paragraphColor: 'text-danger',
    },
    methods: {
        fullName() { return this.firstName + ' ' + this.lastName },
        presentation() {
            return 'Mi chiamo ' + this.fullName() + ' ho ' + this.age + ' e sono nato a ' + this.cityOfBirth;
        },
        toggleColor() {
            this.paragraphColor = this.paragraphColor === 'text-danger' ? 'text-primary' : 'text-danger';
        }
    }
});