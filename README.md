<H3>Conversor de Data</H3>

Converta valores em timestamp para datas legíveis e vice versa.	

<H4>Features: </H4>
* Utilize uma data formatada de acordo com a máscara definida para obter seu valor em timestamp;
* Utilize um  valor em timestamp para obter sua data legível de acordo com a máscara;
* Converta mais de um registro de qualquer tipo ( timestamp ou data string );
* Defina o tipo de separador para os registros ( espaço, nova linha, hífen e etc. );


<H4>  Definições das Máscaras: </H4>
<table>
<thead>
	<tr>
		<th>Field</th>
		<th>Syntax</th>
		<th>Parse</th>
		<th>Format</th>
	</tr>
</thead>
<tbody>
	<tr><td>Year</td><td>yyyy</td><td>4 digits</td><td>4 digits</td></tr>
	<tr><td>Year</td><td>yy</td><td>2 digits</td><td>2 digits</td></tr>
	<tr><td>Year</td><td>y</td><td>2 or 4 digits</td><td>4 digits</td></tr>

	<tr><td>Month</td><td>MMM</td><td>Name or Abbreviation</td><td>Name</td></tr>
	<tr><td>Month</td><td>NNN</td><td>Abbreviation</td><td>Abbreviation</td></tr>
	<tr><td>Month</td><td>MM</td><td>2 digits (01-12)</td><td>2 digits (01-12)</td></tr>
	<tr><td>Month</td><td>M</td><td>1 or 2 digits (1-12)</td><td>1-2 digits (1-12)</td></tr>
	
	<tr><td>Day of Month</td><td>dd</td><td>2 digits (01-31)</td><td>2 digits (01-31)</td></tr>
	<tr><td>Day of Month</td><td>d</td><td>1 or 2 digits (1-31)</td><td>1-2 digits (1-31)</td></tr>

	<tr><td>Day of Week</td><td>EE</td><td>Full name (Sunday-Saturday)</td><td>Full name</td></tr>
	<tr><td>Day of Week</td><td>E</td><td>Abbreviation (Sun-Sat)</td><td>Abbreviation</td></tr>

	<tr><td>Hour</td><td>hh</td><td>2 digits (01-12)</td><td>2 digits (01-12)</td></tr>
	<tr><td>Hour</td><td>h</td><td>1 or 2 digits (1-12)</td><td>1-2 digits (1-12)</td></tr>
	<tr><td>Hour</td><td>HH</td><td>2 digits (00-23)</td><td>2 digits (00-23)</td></tr>
	<tr><td>Hour</td><td>H</td><td>1 or 2 digits (0-23)</td><td>1-2 digits (0-23)</td></tr>
	<tr><td>Hour</td><td>KK</td><td>2 digits (00-11)</td><td>2 digits (00-11)</td></tr>
	<tr><td>Hour</td><td>K</td><td>1 or 2 digits (0-11)</td><td>1-2 digits (0-11)</td></tr>
	<tr><td>Hour</td><td>kk</td><td>2 digits (01-24)</td><td>2 digits (01-24)</td></tr>
	<tr><td>Hour</td><td>k</td><td>1 or 2 digits (1-24)</td><td>1-2 digits (1-24)</td></tr>
	
	<tr><td>Minute</td><td>mm</td><td>2 digits (00-59)</td><td>2 digits (00-59)</td></tr>
	<tr><td>Minute</td><td>m</td><td>1 or 2 digits (0-59)</td><td>1-2 digits (0-59)</td></tr>

	<tr><td>Second</td><td>ss</td><td>2 digits (00-59)</td><td>2 digits (00-59)</td></tr>
	<tr><td>Second</td><td>s</td><td>1 or 2 digits (0-59)</td><td>1-2 digits (0-59)</td></tr>

	<tr><td>AM/PM</td><td>a</td><td>AM/am/PM/pm</td><td>AM/PM</td></tr>
</tbody>
</table>

<H4> Demo: </H4>
Para realizar testes e aprender como utilizar a ferramenta, utilize os valores abaixo com a máscara default:

>1370430003792
>
>1351936804798
>
>12/12/20013 00:00:01
>
>21/07/20004 14:30:00

