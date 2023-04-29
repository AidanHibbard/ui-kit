import { defineComponent } from 'vue';
import './styles/main.css';
export default defineComponent({
    name: 'ui-app',
    props: {
        message: String
    },
    setup(props) {
        return {
            // Component logic here
        };
    },
    template: `
        <div>
            <p>{{ message }}</p>
        </div>
    `
});
