
/* eslint no-unused-vars: 0 */
import ifDefined from '@ui5/webcomponents-base/src/renderer/ifDefined.js';
import { html, svg, repeat, classMap, styleMap } from '@ui5/webcomponents-base/src/renderer/LitRenderer.js';
const block0 = (context) => { return html`<div class="${ifDefined(classMap(context.classes.main))}"><ui5-input id="ui5-multi-combobox--input"		value="${ifDefined(context.value)}"		placeholder="${ifDefined(context.placeholder)}"		?disabled=${ifDefined(context.disabled)}		?readonly=${ifDefined(context.readonly)}		value-state="${ifDefined(context.valueState)}"		@ui5-input="${ifDefined(context._inputLiveChange)}"		@ui5-change=${ifDefined(context._inputChange)}		@keydown="${ifDefined(context._keydown)}"><ui5-tokenizer slot="_beginContent"			show-more			class="ui5-multi-combobox-tokenizer"			?disabled="${ifDefined(context.disabled)}"			@ui5-showMoreItemsPress="${ifDefined(context._showMorePopover)}"			@ui5-tokenDelete="${ifDefined(context._tokenDelete)}"			@focusout="${ifDefined(context._tokenizerFocusOut)}"		>			${ repeat(context.items, undefined, (item, index) => block1(item, index, context)) }</ui5-tokenizer>		${ !context.readonly ? block3(context) : undefined }</ui5-input><ui5-popover 		class="ui5-multi-combobox-selected-items--popover"		horizontal-align="Stretch"		no-header		?no-arrow=${ifDefined(context.editable)}		placement-type="Bottom"><ui5-list separators="None" mode="${ifDefined(context.selectedItemsListMode)}"			@ui5-selectionChange=${ifDefined(context._listSelectionChange)}>			${ repeat(context.items, undefined, (item, index) => block4(item, index, context)) }</ui5-list></ui5-popover><ui5-popover class="ui5-multi-combobox-all-items--popover"		no-arrow		no-header		horizontal-align="Stretch"		initial-focus="ui5-multi-combobox--input"		horizontal-align="Left"		placement-type="Bottom"		@ui5-selectionChange=${ifDefined(context._listSelectionChange)}		@ui5-afterClose=${ifDefined(context._toggleIcon)}		@ui5-afterOpen=${ifDefined(context._toggleIcon)}><ui5-list separators="None" mode="MultiSelect" class="ui5-multi-combobox-all-items-list">			${ repeat(context._filteredItems, undefined, (item, index) => block6(item, index, context)) }</ui5-list></ui5-popover></div>`; };
const block1 = (item, index, context) => { return html`${ item.selected ? block2(item, index, context) : undefined }`; };
const block2 = (item, index, context) => { return html`<ui5-token ?readonly="${ifDefined(context.readonly)}" class="ui5-multi-combobox--token" data-ui5-id="${ifDefined(item._id)}" >${ifDefined(item.textContent)}</ui5-token>				`; };
const block3 = (context) => { return html`<ui5-icon src="sap-icon://slim-arrow-down" 				slot="icon"				@ui5-press=${ifDefined(context._showAllItemsPopover)}				class="${ifDefined(classMap(context.classes.icon))}"			></ui5-icon>		`; };
const block4 = (item, index, context) => { return html`${ item.selected ? block5(item, index, context) : undefined }`; };
const block5 = (item, index, context) => { return html`<ui5-li type="Active" data-ui5-token-id="${ifDefined(item._id)}" .selected="${ifDefined(context.editable)}">${ifDefined(item.textContent)}</ui5-li>				`; };
const block6 = (item, index, context) => { return html`<ui5-li type="Active" ?selected=${ifDefined(item.selected)} data-ui5-token-id="${ifDefined(item._id)}">${ifDefined(item.textContent)}</ui5-li>			`; };

export default block0;