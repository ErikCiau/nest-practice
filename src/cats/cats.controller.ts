import { Body, Controller, Get, Headers, Param, Req, Session } from '@nestjs/common';
import { Request } from 'express';
import { IndentifierService } from 'src/indentifier/indentifier.service';
import { SharedService } from 'src/shared/shared.service';

type Cat = {
  name: string
  age: number
  propietary: string
}

@Controller('cats')
export class CatsController {
  private cats: Cat[] = [{ name: 'Mifi', age: 2, propietary: 'Erik Ciau' }]

  constructor(
    private sharedService: SharedService,
    private uuid: IndentifierService
  ) {

  }

  /**
   * "all" es un prefijo, nest hace un mapero tomando en cuenta el prefijo del controlador
   * en este caso "cats" y despues concatena el prefijo del metodo en este caso "all"
   * en teoría tendriamos disponible la siguente ruta: `GET /cats/all`
   */
  @Get('all')
  allCats() { // El nombre del metodo es arbitrario a la peticion http
    return this.cats // Nest tiene la posibilidad de serializar datos de tipo string, number y booleanos
  }

  /**
   * El decorador @Req expone un objeto de peticion dependiendo del framework que se este
   * usando para levantar el servidor, en este caso "Express"
   */
  @Get('request')
  usingRequest(@Req() req: Request) {
    return req.body
  }
  /** Usando decoradores de request y response */
  @Get('session')
  usingSession(@Session() session: any) {
    console.log(session)
    return session
  }
  /**
   * los dos puntos hacen referencia a un parametro en particular como obtener un Id.
   * 
   * El decorador @Param expone el objeto completo de params o
   * igual se le puede pasar por parametro el nombre del parametro de la ruta
   * en este caso el Id.
   * 
   * Los parametros que declares son totalmente obligatorios
   * ya que al mopease la ruta se va generando una diferente ruta de petición
   * Ej: GET /cats/1/sopas
   */
  @Get(':id/:propietary')
  usingParams(@Param('id') id: number, @Param('propietary') propietary: string) {
    const cat = this.cats[0]
    console.log(id)
    return cat.propietary.toLocaleLowerCase() === propietary.toLocaleLowerCase()
      ? { cat, propietary }
      : cat
  }

  /**
   * Body expone el objeto body, esto puede ser acompañado mediante una clase DTO
   * el cual le agrega tipado a nustros parametros del método
   * en este caso resibe un objeto de tipo Cat
   * {
   *  "name": "Mitifu",
   *  "age": 1,
   *  "propietary": "Erik Ciau"
   * }
   */
  @Get('body')
  usingBody(@Body() cat: Cat) {
    this.cats.push(cat)
    return this.cats
  }

  /**
   * El decarador @Headers expone un objeto donde parsea los headers que vienen
   * dentro de la peticiones.
   * Se le puede pasar como primer parametro el nombre del header a exponer o
   * pasar ningun parametro para exponer el objeto como tal
   */
  @Get('header')
  usingHeaders(@Headers('Content-Type') content: string) {
    return { 'Content-Type': content }
  }

  @Get('greet')
  greet() {
    return this.sharedService.getGreet('Mitifu')
  }

  @Get('generate')
  generate(): string {
    return this.uuid.generate()
  }

}
