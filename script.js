// Obtém referências para os elementos
const textarea = document.getElementById('infor-medic');
const charLimitMessage = document.getElementById('charLimitMessage'); // Apenas o balão de mensagem

// Não precisamos mais do charCountSpan nem currentLengthSpan/maxLengthSpan
// Pega o limite máximo diretamente do atributo HTML maxlength do textarea
const maxLength = textarea.maxLength;

// A função 'updateCharCount' agora é mais sobre o estado de limite
function checkCharLimit() { // Renomeada para ser mais clara
    const currentLength = textarea.value.length;

    // Se o limite foi atingido ou excedido
    if (currentLength >= maxLength) {
        // Adiciona a classe 'input-error' ao textarea (borda vermelha)
        textarea.classList.add('input-error');
        // Mostra o balão de mensagem de erro
        charLimitMessage.classList.add('show');
    } else {
        // Remove a classe de erro do textarea
        textarea.classList.remove('input-error');
        // Esconde o balão de mensagem de erro
        charLimitMessage.classList.remove('show');
    }
}

// Adiciona o event listener ao textarea para verificar o limite a cada digitação
textarea.addEventListener('input', checkCharLimit);

// Chama a função uma vez ao carregar a página para definir o estado inicial (escondido)
checkCharLimit();



// --- Lógica para limitar seleção de Checkboxes (Máx. 2 Esportes) ---
document.addEventListener('DOMContentLoaded', () => { // Garante que o DOM esteja carregado
    const sportCheckboxes = document.querySelectorAll('.esporte-options input[type="checkbox"]');
    const checkboxErrorMessage = document.querySelector('.checkbox-error-message');
    const maxSelections = 2; // O limite máximo de seleções

    // Função para verificar o limite de seleção
    function checkSportSelectionLimit() {
        const checkedCount = Array.from(sportCheckboxes).filter(checkbox => checkbox.checked).length;

        if (checkedCount > maxSelections) {
            // Se excedeu o limite, impede a seleção e mostra erro
            // Isso geralmente é tratado antes do "checkedCount > maxSelections"
            // mas aqui é para feedback visual se o limite for atingido.
            checkboxErrorMessage.classList.add('show');
        } else {
            checkboxErrorMessage.classList.remove('show');
        }

        // Lógica para desabilitar / habilitar checkboxes restantes
        if (checkedCount >= maxSelections) {
            sportCheckboxes.forEach(checkbox => {
                if (!checkbox.checked) {
                    checkbox.disabled = true; // Desabilita os não checados
                    checkbox.nextElementSibling.classList.add('is-disabled'); // Adiciona classe visual
                }
            });
        } else {
            sportCheckboxes.forEach(checkbox => {
                checkbox.disabled = false; // Habilita todos se estiver abaixo do limite
                checkbox.nextElementSibling.classList.remove('is-disabled');
            });
        }
    }

    // Adiciona listener para cada checkbox de esporte
    sportCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', checkSportSelectionLimit);
    });

    // Chama a função uma vez ao carregar a página para o estado inicial
    checkSportSelectionLimit();
});

// --- Adaptação do CSS para o estado 'is-disabled' no label do card ---
// Adicione isso ao seu CSS (styles/index.css)


