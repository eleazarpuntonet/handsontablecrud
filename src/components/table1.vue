<template>
	<el-row :gutter="20">
		<el-col :span="12" :offset="4">
			<div class="container">
				<div class="buttonContainer">
					<div class="greenButtons">
						<el-button
							size      = "mini"
							@click    = "reaadOnly()"
							type      = "default">Read Only
						</el-button>
						<el-button 
							size      = "mini"
							@click    = "crearElemento()"
							type      = "primary">Crear
						</el-button>
						<el-button 
							size      = "mini"
							:disabled = "dialogoCentradoEditar"
							@click    = "actualizarElemento()"
							type      = "primary">Guardar
						</el-button>
					</div>
					<div class="redButtons">
						<el-popover
							placement = "top"
							width     = "160"
							v-model   = "dialogoEliminar">
							<p>Confirma que desea eliminar el elemento?</p>
							<div style="text-align: right; margin: 0">
								<el-button size="mini" type="text" @click="dialogoEliminar = false">Cancelar</el-button>
								<el-button type="primary" size="mini" @click="dialogoEliminar = false">Confirmar</el-button>
							</div>
							<el-button 
								size      = "mini"
								slot      = "reference"
								@click    = "eliminarElemento()"
								:disabled = "dialogoEliminar"
								type      = "danger">Eliminar
							</el-button>
						</el-popover>
					</div>
				</div>
				<div class="tablaContainer">
					<hot-table 
						id         = "hands_onTabla"
						class      = "tablaHands"
						:settings  = "hotSettings"
						licenseKey = "non-commercial-and-evaluation" />
				</div>
			</div>
		</el-col>

		<el-dialog
			title         = "Editar"
			:visible.sync = "dialogoCentradoEditar"
			width         = "30%"
			center>
			<span>En este dialogo habran inputs</span>
			<span 
				slot  = "footer"
				class = "dialog-footer">
				<el-button 
					@click = "dialogToggle('Editar')">Cancelar
				</el-button>
				<el-button 
					type   = "primary" 
					@click = "dialogToggle('Editar')">Confirmar
				</el-button>
			</span>
		</el-dialog>

		<el-dialog
			title         = "Crear Elemento"
			:visible.sync = "dialogoCentradoCrear"
			width         = "50%"
			center>
			<span>Se mostraran inputs para crear elemento</span>
			<span slot="footer" class="dialog-footer">
				<el-button 
					@click = "dialogToggle('Crear')">Cancelar
				</el-button>
				<el-button 
					type   = "danger"
					@click = "dialogToggle('Crear')">Confirmar
				</el-button>
			</span>
		</el-dialog>
	</el-row>
</template>

<script>
	import { HotTable, HotColumn } from '@handsontable/vue';
	import Handsontable from 'handsontable';
	import store from '../store';
	import * as type from '../mutationtypes/types';
	import { mapState } from 'vuex';

	const gridOnChange = (change, source) => {
		// console.log(change)
		// console.log(source)
		// if (source === 'loadData') {
		//     return; //don't save this change
		// }
		// if (!autosave.checked) {
		// 	return;
		// }
	}

	export default {
		name: 'table1',
		data () {
			return {
				countries : {},
				dialogoCentradoEditar: false,
				dialogoCentradoCrear: false,
				dialogoEliminar: false,
			  	hotSettings: {
			  		data               : store.getters.fullCountries,
			  		colHeaders         : ['Pais', 'Abreviacion', 'Codigo de llamada', 'Capital'],
			  		minSpareRows       : 1,
			  		manualColumnResize : true,
			  		width              : '100%',
			  		height             : 320,
			  		columns      : [
			  			{
	  						data: 'country',
	  						type: 'text',
	  						className: 'columnaclass',
			  			},
    					{
    						data: 'abbreviation',
	  						type: 'text'
    					},
    					{
    						data: 'calling_code',
	  						type: 'text'
    					},
    					{
    						data: 'city',
	  						type: 'text'
    					}
    				],
    				cells: function (row, col, prop) {
    				  var cellProperties = {}
    				  // Funcion recibe numero fila, numero columna y propiedad que se muestra
    				  // en base a esos valores se puede filtrar que informacion se muestra o no
    				  // ejemplo
    				  // if (row === 0 && col === 0) {
    				  //   cellProperties.readOnly = true;
    				  // }
    				  return cellProperties;
    				},
    				afterChange: gridOnChange,
			  	}
			}
		},
		components: {
		  HotTable,
		  HotColumn
		},
		methods: {
			dialogToggle(dialogo){
				switch(dialogo){
					case "Editar":
						if (this.dialogoCentradoEditar)
							this.dialogoCentradoEditar = false
						else
							this.dialogoCentradoEditar = true
					break
					case "Crear":
						if (this.dialogoCentradoCrear)
							this.dialogoCentradoCrear = false
						else
							this.dialogoCentradoCrear = true
					break
					default:
						console.log("No se recibio valor en la funcion dialogToggle")
				}
			},
		    crearElemento(){
		    	this.dialogToggle('Crear')
		    },
		    eliminarElemento(){
		    	console.log("Eliminar elemento")
		    },
		    actualizarElemento(){
		    	this.dialogToggle('Editar')
		    },
		    readOnly(){
		    	console.log("Evento read only")
		    },
		},
		mounted: () =>  {
		  // console.log(store.getters.fullCountries)
		}
	}
</script>

<style lang="sass">
	.buttonContainer
		margin-bottom: 5px
		display: flex
		.greenButtons
			width: 70%
			text-align: left
		.redButtons
			width: 30%
			text-align: right
	#hands_onTabla
		.columnaclass
			// background-color: red
		.tableContainer
			display: flex
			border: 1px solid green
		.colHeader
			font-size: 12px
		td
			font-size: 11px
</style>